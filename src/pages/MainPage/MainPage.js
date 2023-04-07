import {
  BgLeaveTop,
  CategoryList,
  HeroWrap,
  Wrap,
  HeroTitle,
  HeroText,
  BgElement,
  Container,
} from './MainPage.styled';
import { nanoid } from 'nanoid';
import useWindowDimensions from 'hooks/useWindowDimensions';
import plate from 'images/mobile/main-page-plate375.png';
import plateTablet from 'images/tablet/main-page-plate768.png';
import plateDesk from 'images/desktop/main-page-plate1440.png';
import { MainCategoryItem } from 'components/Main/MainCategoryItem/MainCategoryItem';
import data from 'components/Main/data.json';

export default function MainPage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <HeroWrap>
        <BgLeaveTop></BgLeaveTop>
        <Wrap>
          <HeroTitle>
            <span>So</span>Yummy
          </HeroTitle>
          <HeroText>
            "What to cook?" is not only a recipe app, it is, in fact, your
            cookbook. You can add your own recipes to save them for the future.
          </HeroText>
        </Wrap>
        {width < 768 ? (
          <img src={plate} alt="plate" width="320" />
        ) : width < 1440 ? (
          <img src={plateTablet} alt="plate" width="378" />
        ) : (
          <img src={plateDesk} alt="plate" width="578" />
        )}
        <BgElement></BgElement>
      </HeroWrap>
      <Container>
        <CategoryList>
          {data.map(category => (
            <MainCategoryItem key={nanoid()} category={category} />
          ))}
        </CategoryList>
      </Container>
    </>
  );
}
