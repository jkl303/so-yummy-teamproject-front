import { Img, ImgL, ImgR, Title, WrapperTitle } from './MainPageTitle.styled';

const MainPageTitle = ({ text }) => {
  return (
    <WrapperTitle>
      <Title>{text}</Title>
      <Img />
      <ImgR />
      <ImgL />
    </WrapperTitle>
  );
};
export default MainPageTitle;
