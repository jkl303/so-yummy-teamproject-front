import {
  FooterComponent,
  FooterMainBlockItem,
  DescroptionWrap,
  LogoWrap,
  LogoLink,
  Logo,
  Link,
  Copyright,
  FooterMainBlock,
} from './Footer.styled';
import { TextList } from 'components/TextList/TextList';
import { Navigation } from 'components/Navigation/Navigation';
import { SubscribeForm } from 'components/SubscribeForm/SubscribeForm';
import { SocialList } from 'components/SocialList/SocialList';

import useWindowDimensions from 'hooks/useWindowDimensions';

export default function Footer() {
  const { width } = useWindowDimensions();
  return (
    <FooterComponent>
      <FooterMainBlock>
        <FooterMainBlockItem>
          <DescroptionWrap>
            <LogoWrap>
              <LogoLink to="/main">
                <Logo />
              </LogoLink>
              <Link>So Yummy</Link>
            </LogoWrap>
            {width > 767 && <TextList />}
          </DescroptionWrap>
          <Navigation />
        </FooterMainBlockItem>
        <SubscribeForm />
      </FooterMainBlock>
      <SocialList />
      <Copyright>
        <span>© 2023 All Rights Reserved.</span>
        <span>Terms of Service</span>
      </Copyright>
    </FooterComponent>
  );
}
