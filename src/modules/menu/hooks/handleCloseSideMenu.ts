import { useDispatch } from 'react-redux';
import { setMenuOpen } from '../../../redux/slices/menuSlice';

export const useSideMenu = () => {
  const dispatch = useDispatch();

  const handleCloseSideMenu = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.currentTarget === event.target) {
      dispatch(setMenuOpen(false));
    }
  };

  return {
    handleCloseSideMenu,
  };
};
