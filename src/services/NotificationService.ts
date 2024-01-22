import { AxiosResponse } from 'axios';
import { notificationServiceAPI } from '../http';
import { IResendEmailConfirmationData } from './types/request';

export class NotificationService {
  static async resendEmailConfirmation({
    email,
    activationLinkId,
  }: IResendEmailConfirmationData): Promise<AxiosResponse<void>> {
    return notificationServiceAPI.post('/email/resend-confirmation', {
      email,
      activationLinkId,
    });
  }
}
