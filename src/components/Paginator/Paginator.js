import MyRecipesList from 'components/MyRecipeList/MyRecipeList';
import { PaginatorWrapper } from 'components/Paginator/Paginator.styled';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

const Paginator = ({ data }) => {
  const [recipes, setRecipes] = useState(data);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = recipes.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(recipes.length / itemsPerPage);

  const onDeleteRecipe = id => {
    const newData = recipes.filter(recipe => recipe._id !== id);
    setRecipes(newData);
    setItemOffset(0);
  };

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % recipes.length;
    console.log(newOffset);
    setItemOffset(newOffset);
  };
  console.log(currentItems);
  return (
    <>
      <MyRecipesList
        currentItems={currentItems}
        onChangeProps={onDeleteRecipe}
      />
      <PaginatorWrapper>
        <ReactPaginate
          breakLabel="..."
          nextLabel=" > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel=" < "
          renderOnZeroPageCount={null}
          activeLinkClassName={'active'}
          disabledClassName={'disabled'}
        />
      </PaginatorWrapper>
    </>
  );
};

export default Paginator;
