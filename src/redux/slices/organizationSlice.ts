import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { IOrganizationState } from '../../modules/settings/organization';
import {
  createOrganizationCases,
  updateOrganizationCases,
} from '../cases/organization';
import { organizationInitialState } from '../initialStates';

const organizationSlice = createSlice({
  name: 'organization',
  initialState: organizationInitialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<IOrganizationState>) => {
    updateOrganizationCases(builder);
    createOrganizationCases(builder);
  },
});

export default organizationSlice.reducer;
