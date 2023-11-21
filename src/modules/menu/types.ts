export interface IMenuItem {
  id: string;
  title: string;
  icon: JSX.Element;
  redirectPage: string;
}

export interface ISideMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
