import { NavLink } from 'react-router-dom';
import { Logo, Title, Text, WelcomWrapper} from './WelcomePage.styled';
import { Logo, Title, Text, WelcomWrapper } from './WelcomePage.styled';
import { HeroAuthBtn } from 'components/Buttons/HeroAuthBtn/HeroAuthBtn';
import HiddenSectionTitle from 'components/HiddenSectionTitle/HiddenSectionTitle';

export default function WelcomePage() {
  return (
    <WelcomWrapper>
      <Logo />
      <HiddenSectionTitle>So yummy - digital cookbook</HiddenSectionTitle>
      <Title>Welcome to the app!</Title>
      <Text>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Text>
      <div>
        <NavLink to="/register">
          <HeroAuthBtn active text="Registration" />
        </NavLink>
        <NavLink to="/login">
          <HeroAuthBtn text="Sign In" />
        </NavLink>
      </div>
    </WelcomWrapper>
  );
}
