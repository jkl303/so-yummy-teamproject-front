import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import {
  BgLeaveTop,
  HeroWrap,
  Wrap,
  TitleStyled,
  HeroTitle,
  HeroText,
  ImageWrap,
  ImageStyled,
  DescrWrap,
  DescrAccent,
  Description,
  LinkToRecipes,
  ArrowBox,
  BgElement,
} from './MainHero.styled';

import { BsArrowRight } from 'react-icons/bs';
import useWindowDimensions from 'hooks/useWindowDimensions';
import plate from 'images/mobile/main-page-plate375.png';
import plate2x from 'images/mobile/main-page-plate375-2x.png';
import plateTablet from 'images/tablet/main-page-plate768.png';
import plateTablet2x from 'images/tablet/main-page-plate768-2x.png';
import plateDesk from 'images/desktop/main-page-plate1440.png';
import plateDesk2x from 'images/desktop/main-page-plate1440-2x.png';
import { SearchForm } from 'components/search/SearchForm/SearchForm';

export const MainHero = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const { width } = useWindowDimensions();

  const handleSubmit = e => {
    e.preventDefault();
    const innerQuery = e.target.search.value;
    navigate(`/search?query=${innerQuery}`, { replace: true });
  };

  return (
    <HeroWrap>
      <BgLeaveTop></BgLeaveTop>
      <Wrap>
        <HeroTitle>
          <TitleStyled>So</TitleStyled>Yummy
        </HeroTitle>
        <HeroText>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future.
        </HeroText>
        {width > 767 && <SearchForm handleSubmit={handleSubmit} />}
      </Wrap>
      <ImageWrap>
        {width < 768 ? (
          <ImageStyled
            src={plate}
            srcSet={`${plate} 1x, ${plate2x} 2x`}
            alt="plate"
            width="320"
          />
        ) : width < 1440 ? (
          <ImageStyled
            src={plateTablet}
            srcSet={`${plateTablet} 1x, ${plateTablet2x} 2x`}
            alt="plate"
            width="378"
          />
        ) : (
          <ImageStyled
            src={plateDesk}
            srcSet={`${plateDesk} 1x, ${plateDesk2x} 2x`}
            alt="plate"
            width="578"
          />
        )}
        <DescrWrap>
          <Description>
            <DescrAccent>Delicious and healthy</DescrAccent> way to enjoy a
            variety of fresh ingredients in one satisfying meal
          </Description>

          <LinkToRecipes
            to={`/categories/${data[0].category}`}
            location={location}
          >
            See recipes <BsArrowRight size="18" />
          </LinkToRecipes>

          <ArrowBox></ArrowBox>
        </DescrWrap>
        {width < 768 && (
          <SearchForm
            handleSubmit={handleSubmit}
            initialValue={searchParams.get('query') || ''}
          />
        )}
      </ImageWrap>
      <BgElement></BgElement>
    </HeroWrap>
  );
};
