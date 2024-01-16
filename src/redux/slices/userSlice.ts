import { IUserState } from '../../modules/auth';
import { createValueReducers } from '../sliceHelpers';

const userSlice = createValueReducers({
  id: '',
  isActive: false,
} as IUserState);

export default userSlice.reducer;
export const { setValue: setValueUser, resetValue: resetValueUser } =
  userSlice.actions;
