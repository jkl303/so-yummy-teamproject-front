// import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';
import { MainTitleStyled } from './MainTitle.styled';
import {
  Img,
  ImgL,
  ImgR,
  WrapperTitle,
} from 'components/MyRecipeList/MainPageTitle/MainPageTitle.styled';

export const MainTitle = ({ title }) => {
  return (
    <WrapperTitle>
      {/* <Helmet>
        <title>{title}</title>
      </Helmet> */}
      <MainTitleStyled>{title}</MainTitleStyled>
      <Img />
      <ImgR />
      <ImgL />
    </WrapperTitle>
  );
};

MainTitle.propTypes = { title: PropTypes.string.isRequired };
