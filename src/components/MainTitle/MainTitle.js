import { Helmet } from "react-helmet-async";
import PropTypes from "prop-types";
import { MainTitleStyled } from "./MainTitle.styled";

export const MainTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainTitleStyled>{title}</MainTitleStyled>
    </>
  );
};

MainTitle.propTypes = { title: PropTypes.string.isRequired };
