import RegisterForm from 'components/AuthForms/RegisterForm/RegisterForm';
import image from '../../images/mobile/start-girl375-2x.png';
import {
  Img,
  PageWrapper,
  BottomWrap,
  LinkWrap,
  GoogleIcon,
  IconWrap,
  RegLink,
} from './RegistrationPage.styled';

export default function RegistrationPage() {
  return (
    <PageWrapper>
      <Img src={image} alt="girl in a chair" />
      <BottomWrap>
        <LinkWrap>
          <a href={`${process.env.REACT_APP_API_URL}/auth/google`}>
            <IconWrap>
              <GoogleIcon />
            </IconWrap>
          </a>
          <RegLink to="/login">Sign In</RegLink>
        </LinkWrap>
      </BottomWrap>
      <RegisterForm />
    </PageWrapper>
  );
}
