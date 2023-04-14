import useWindowDimensions from 'hooks/useWindowDimensions';
import { AddRecipeForm } from '../../components/AddRecipePage/AddRecipeForm/AddRecipeForm';
import { PopularRecipe } from '../../components/AddRecipePage/PopularRecipe/PopularRecipe';
import { FollowUs } from '../../components/AddRecipePage/FollowUs/FollowUs';
import { MainTitle } from '../../components/MainTitle/MainTitle';
import { AddRecipePageStyled } from './AddRecipePage.styled';
import { Container } from 'pages/MainPage/MainPage.styled';

export default function AddRecipePage() {
  const { width } = useWindowDimensions();
  return (
    <AddRecipePageStyled>
      <Container>
        <MainTitle title={'Add recipe'} />
        <AddRecipeForm />
        {width > 1439 && <FollowUs />}
        <PopularRecipe />
      </Container>
    </AddRecipePageStyled>
  );
}
