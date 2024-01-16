import { IAuthState } from '../../modules/auth';
import { createValueReducers } from '../sliceHelpers';

const authSlice = createValueReducers({
  isAuth: false,
} as IAuthState);

export default authSlice.reducer;
export const { setValue: setValueAuth } = authSlice.actions;
