import {
  First,
  Second,
  Third,
  Title,
  Descr,
  Section,
  Img,
} from './NotFoundPage.styled';
import IMG from '../../images/desktop/404-page-notfound1440-2x.png';

export default function NotFound() {
  return (
    <Section>
      <First></First>
      <Second></Second>
      <Third></Third>
      <Img src={IMG} alt="" />
      <Title>We are sorry,</Title>
      <Descr>but the page you were looking for can’t be found..</Descr>
    </Section>
  );
}
