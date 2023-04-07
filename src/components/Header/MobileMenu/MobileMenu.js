// import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import { Logo } from "../Header/HeaderStyled";
import {
  Wrap,
  LogoLink,
  Button,
  IconClose,
} from "../MobileMenu/MobileMenuStyled";

import HeaderNavigation from "../HeaderNav/HeaderNav";

const MobileMenu = ({ toggleMenu }) => {
  return (
    <Wrap>
      <div>
        <LogoLink to="/main">
          <Logo />
        </LogoLink>
        <Button
          onClick={() => {
            toggleMenu();
          }}
        >
          <IconClose />
        </Button>

        <HeaderNavigation />
      </div>
    </Wrap>
  );
};

export default MobileMenu;
