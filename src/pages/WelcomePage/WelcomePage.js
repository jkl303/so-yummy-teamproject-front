import { NavLink } from 'react-router-dom';
import { Logo, Title, Text, WelcomWrapper, Link } from './WelcomePage.styled';
import { HeroAuthBtn } from 'components/Buttons/HeroAuthBtn/HeroAuthBtn';

export default function WelcomePage() {
  return (
    <WelcomWrapper>
      <Logo />
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
