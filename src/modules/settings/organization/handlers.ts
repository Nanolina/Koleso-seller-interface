import { AppDispatch } from '../../../redux/store';
import {
  handleCreateOrganization,
  handleUpdateOrganization,
} from '../../../redux/thunks/organization';
import { DocumentType, ICreateOrganizationData, IOrganization } from './types';

export const handleSubmitForm = async (
  values: ICreateOrganizationData,
  organization: IOrganization,
  dispatch: AppDispatch
) => {
  const { name, TIN, documents } = values;
  const organizationFormData = new FormData();
  organizationFormData.append('name', name);
  if (TIN) organizationFormData.append('TIN', TIN);

  const documentKeys: DocumentType[] = [
    DocumentType.Passport,
    DocumentType.CertificateOfRegistration,
    DocumentType.CertificateOfDirectorsAndSecretary,
    DocumentType.CertificateOfRegisteredOffice,
    DocumentType.CertificateOfShareholders,
    DocumentType.CertificateTaxResidency,
  ];
  documentKeys.forEach((key) => {
    if (documents[key]) {
      organizationFormData.append(key, documents[key]);
    }
  });

  if (organization.id) {
    await dispatch(
      handleUpdateOrganization({
        id: organization.id,
        organizationFormData,
      })
    );
  } else {
    await dispatch(handleCreateOrganization(organizationFormData));
  }
};
