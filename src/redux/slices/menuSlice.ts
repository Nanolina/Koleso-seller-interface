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
    toggleFilter: (state) => {
      state.isFilterOpen = !state.isFilterOpen;
    },
  },
});

export const { toggleMenu, setMenuOpen, toggleFilter } = menuSlice.actions;

export default menuSlice.reducer;
