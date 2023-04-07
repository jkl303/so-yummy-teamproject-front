import { IconOpen, Button } from "./BurgerButtonStyled";

const BurgerButton = ({ toggleMenu }) => {
  return (
    <Button
      onClick={() => {
        toggleMenu();
      }}
    >
      <IconOpen />
    </Button>
  );
};
export default BurgerButton;
