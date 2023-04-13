import { IconOpen, IconOpenWhite, Button } from './BurgerButtonStyled';

const BurgerButton = ({ toggleMenu }) => {
  const isMainPage = window.location.pathname.includes('main');

  return (
    <Button
      onClick={() => {
        toggleMenu();
      }}
    >
      {isMainPage ? <IconOpenWhite /> : <IconOpen />}
    </Button>
  );
};
export default BurgerButton;
