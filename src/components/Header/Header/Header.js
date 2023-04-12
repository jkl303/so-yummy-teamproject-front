import { useState } from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';
import {
  HeaderBlock,
  HeaderWrapper,
  HeaderElement,
  LogoWrap,
  LogoLink,
  Logo,
} from './HeaderStyled';

import MobileMenu from '../MobileMenu/MobileMenu';
import BurgerButton from '../BurgerButton/BurgerButton';
import HeaderNavigation from '../HeaderNav/HeaderNav';
import UserInfo from '../UserInfo/UserInfo';
import Switch from '../Switch/Switch';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { width } = useWindowDimensions();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderBlock>
      <HeaderWrapper>
        <HeaderElement>
          <LogoWrap>
            <LogoLink to="/main">
              <Logo />
            </LogoLink>
          </LogoWrap>

          {width > 1439 && <HeaderNavigation />}

          <UserInfo />

          {!isOpen ? (
            <BurgerButton toggleMenu={toggleMenu} />
          ) : (
            <MobileMenu toggleMenu={toggleMenu} />
          )}
          {width >= 1440 && <Switch />}
        </HeaderElement>
      </HeaderWrapper>
    </HeaderBlock>
  );
};

export default Header;
