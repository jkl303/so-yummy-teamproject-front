import HiddenSectionTitle from 'components/HiddenSectionTitle/HiddenSectionTitle';
import {
  First,
  Second,
  Third,
  TitleNoFound,
  DescrNoFound,
  SectionNoFound,
  ImgNoFound,
} from './NotFoundPage.styled';
import IMG from 'images/desktop/404-page-notfound1440-2x.png';

export default function NotFound() {
  return (
    <SectionNoFound>
      <HiddenSectionTitle>404 page</HiddenSectionTitle>
      <First></First>
      <Second></Second>
      <Third></Third>
      <ImgNoFound src={IMG} alt="" />
      <TitleNoFound>We are sorry,</TitleNoFound>
      <DescrNoFound>
        but the page you were looking for can’t be found..
      </DescrNoFound>
    </SectionNoFound>
  );
}
