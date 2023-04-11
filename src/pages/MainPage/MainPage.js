import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { instance } from 'redux/auth/authOperations';
import { CategoryList, Container, BtnWrap } from './MainPage.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';

import { MainCategoryItem } from 'components/Main/MainCategoryItem/MainCategoryItem';
// import ButtonPreview from 'components/Buttons/ButtonPreview';
import { OtherCategoriesBtn } from 'components/Buttons/OtherCategoriesBtn/OtherCategoriesBtn';
import Loader from 'components/Loader/Loader';
import { MainHero } from 'components/Main/MainHero/MainHero';

export default function MainPage() {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  const getRecipesByCategory = async () => {
    try {
      const response = await instance.get('/recipes/main-page');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getRecipesByCategory()
      .then(data => {
        setRecipesByCategory(data);
        setLoading(false);
      })
      .catch(error => {
        console.log(`${error.name}: ${error.message}`);
        toast.error('Sorry, something went wrong...');
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      {recipesByCategory.length > 0 && (
        <>
          <MainHero data={recipesByCategory} />
          <Container>
            <CategoryList>
              {recipesByCategory.map(category => (
                <MainCategoryItem key={nanoid()} category={category} />
              ))}
            </CategoryList>
            <BtnWrap>
              <OtherCategoriesBtn
                to={`/categories/${recipesByCategory[0].category}`}
                location={location}
              />
            </BtnWrap>
          </Container>
        </>
      )}
      {/* <ButtonPreview /> */}
    </>
  );
}
