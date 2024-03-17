import { unwrapResult } from '@reduxjs/toolkit';
import { NEW } from '../../../consts';
import { AppDispatch } from '../../../redux/store';
import {
  handleCreateOrganization,
  handleUpdateOrganization,
} from '../../../redux/thunks/organization';
import { DocumentType, ICreateOrganizationData, IOrganization } from './types';

export const handleSubmitForm = async (
  organizationId: string | undefined,
  values: ICreateOrganizationData,
  dispatch: AppDispatch,
  navigate: any
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
      organizationFormData.append(key, documents[key] as File | string);
    }
  });

  if (organizationId && organizationId !== NEW) {
    await dispatch(
      handleUpdateOrganization({
        id: organizationId,
        organizationFormData,
      })
    );
  } else {
    const data = await dispatch(handleCreateOrganization(organizationFormData));
    const resultOrganization: IOrganization = unwrapResult(data);
    if (resultOrganization)
      navigate(`/settings/organization/${resultOrganization.id}`);
  }
};
