export interface IMenuItem {
  id: string;
  title: string;
  icon: JSX.Element;
  redirectPage: string;
}

export interface IMenuState {
  isMenuOpen: boolean;
  isFilterOpen: boolean;
}
