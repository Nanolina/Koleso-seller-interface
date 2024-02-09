import { createSlice } from '@reduxjs/toolkit';
import { menuInitialState } from '../initialStates';

const menuSlice = createSlice({
  name: 'menu',
  initialState: menuInitialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, action) => {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { toggleMenu, setMenuOpen } = menuSlice.actions;

export default menuSlice.reducer;
