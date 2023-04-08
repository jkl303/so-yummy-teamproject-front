import {
  FooterComponent,
  Wrap,
  FooterWrap,
  LogoWrap,
  LogoLink,
  Logo,
  Link,
  Copyright,
  CopyrightText,
  CopyrightText2,
  Div,
} from './Footer.styled';
import { TextList } from '../TextList/TextList';
import { Navigation } from '../Navigation/Navigation';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { SocialList } from '../SocialList/SocialList';

import useWindowDimensions from '../../hooks/useWindowDimensions';

const Footer = () => {
  const { width } = useWindowDimensions();
  return (
    <FooterComponent>
      <Div>
        <Wrap>
          <FooterWrap>
            <LogoWrap>
              <LogoLink to="/main">
                <Logo />
              </LogoLink>
              <Link>So Yummy</Link>
            </LogoWrap>
            {width > 767 && <TextList />}
          </FooterWrap>
          <Navigation />
        </Wrap>
        <SubscribeForm />
      </Div>
      <SocialList />
      <Copyright>
        <CopyrightText>© 2023 All Rights Reserved.</CopyrightText>
        <CopyrightText2>Terms of Service</CopyrightText2>
      </Copyright>
    </FooterComponent>
  );
};

export default Footer;