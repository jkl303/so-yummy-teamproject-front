import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { CategoryList, BtnWrap } from './MainPage.styled';
import { ContainerComponent } from 'components/Container/Container.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-hot-toast';

import { MainCategoryItem } from 'components/Main/MainCategoryItem/MainCategoryItem';
// import ButtonPreview from 'components/Buttons/ButtonPreview';
import { OtherCategoriesBtn } from 'components/Buttons/OtherCategoriesBtn/OtherCategoriesBtn';
import Loader from 'components/Loader/Loader';
import { getRecipesByCategory } from './fetchMainPageRecipes';
import { MainHero } from 'components/Main/MainHero/MainHero';

export default function MainPage() {
  const [recipesByCategory, setRecipesByCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

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
          <ContainerComponent>
            <CategoryList>
              {recipesByCategory.map(category => (
                <MainCategoryItem key={nanoid()} category={category} />
              ))}
            </CategoryList>
            <BtnWrap>
              <OtherCategoriesBtn to={`/categories/Beef`} location={location} />
            </BtnWrap>
          </ContainerComponent>
        </>
      )}
      {/* <ButtonPreview /> */}
    </>
  );
}
