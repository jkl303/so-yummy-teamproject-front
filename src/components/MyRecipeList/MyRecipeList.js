import { useEffect, useState } from 'react';
import { instance } from 'redux/auth/authOperations';
import MyRecipesItem from './MyRecipesItem/MyRecipesItem';
import Loader from 'components/Loader/Loader';
import { WrapperList } from './MyRecipeList.styled';
import Paginator from 'components/Paginator/Paginator';

const MyRecipesList = ({ currentItems, onChangeProps }) => {
  // const [recipes, setRecipes] = useState(data);
  // const [currentItems, setCurrentItems] = useState([]);
  // const currentItems = recipes.slice(itemOffset, endOffset);

  const handleDelete = id => {
    async function deleteData(data) {
      try {
        await instance.delete('/users/ownRecipes', {
          data: {
            _id: data,
          },
        });
        // const newRecipes = currentItems.filter(recipe => recipe._id !== id);
        onChangeProps(id);
      } catch (er) {}
    }

    deleteData(id);
  };

  return (
    <WrapperList>
      {currentItems.map(recipe => (
        <MyRecipesItem
          recipe={recipe}
          handleDelete={handleDelete}
          key={recipe._id}
        />
      ))}
    </WrapperList>
  );
};

export default MyRecipesList;
