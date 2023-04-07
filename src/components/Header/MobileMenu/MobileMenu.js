import { Logo } from '../Header/HeaderStyled';
import {
  Wrap,
  LogoLink,
  Button,
  IconClose,
  SwitchWrap,
} from '../MobileMenu/MobileMenuStyled';

import HeaderNavigation from '../HeaderNav/HeaderNav';
import Switch from '../Switch/Switch';

const MobileMenu = ({ toggleMenu }) => {
  return (
    <Wrap>
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

      <SwitchWrap>
        <Switch/>
      </SwitchWrap>
    </Wrap>
  );
};

export default MobileMenu;
