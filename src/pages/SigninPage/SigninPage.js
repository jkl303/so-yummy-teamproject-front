import SigninForm from 'components/AuthForms/SigninForm/SigninForm';
import image from '../../images/mobile/start-girl375-2x.png';
import {
  Img,
  PageWrapper,
  BottomWrap,
  GoogleLink,
  GoogleIcon,
  IconWrap,
  RegLink,
} from './SigninPage.styled';

export default function SigninPage() {
  return (
    <PageWrapper>
      <Img src={image} alt="girl in a chair" />
      <BottomWrap>
        <GoogleLink href={`${process.env.REACT_APP_API_URL}/auth/google`}>
          <IconWrap>
            <GoogleIcon />
          </IconWrap>
        </GoogleLink>
        <RegLink to="/register">Registration</RegLink>
      </BottomWrap>
      <SigninForm />
    </PageWrapper>
  );
}
