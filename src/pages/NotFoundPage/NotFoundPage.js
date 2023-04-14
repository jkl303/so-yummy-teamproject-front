import HiddenSectionTitle from 'components/HiddenSectionTitle/HiddenSectionTitle';
import {
  First,
  Second,
  Third,
  TitleNotFound,
  DescrNotFound,
  SectionNotFound,
  ImgNotFound,
} from './NotFoundPage.styled';
import IMG from 'images/desktop/404-page-notfound1440-2x.png';

export default function NotFound() {
  return (
    <SectionNotFound>
      <HiddenSectionTitle>404 page</HiddenSectionTitle>
      <First></First>
      <Second></Second>
      <Third></Third>
      <ImgNotFound src={IMG} alt="" />
      <TitleNotFound>We are sorry,</TitleNotFound>
      <DescrNotFound>
        but the page you were looking for can’t be found..
      </DescrNotFound>
    </SectionNotFound>
  );
}
