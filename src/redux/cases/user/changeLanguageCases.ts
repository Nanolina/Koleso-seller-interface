import { ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';
import i18n from '../../../i18n/i18n';
import { IUserState } from '../../../modules/auth';
import { ILanguagePayload } from '../../../modules/settings';
import { handleChangeLanguage } from '../../thunks/user';

export const changeLanguageCases = (
  builder: ActionReducerMapBuilder<IUserState>
) => {
  builder
    .addCase(handleChangeLanguage.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(
      handleChangeLanguage.fulfilled,
      (state, action: PayloadAction<ILanguagePayload>) => {
        const language = action.payload.language;
        state.language = language;
        state.loading = false;
        state.success = `The language has been changed to ${language}`;
        i18n.changeLanguage(language.toString());
      }
    )
    .addCase(handleChangeLanguage.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || 'Failed to log in';
    });
};
