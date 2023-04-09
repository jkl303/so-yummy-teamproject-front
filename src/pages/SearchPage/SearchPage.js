// import {} from './SearchPage.styled';

import { SearchFilter } from 'components/search/SearchFilter/SearchFilter';
import { SearchForm } from 'components/search/SearchForm/SearchForm';
import { CategoryList, Container } from 'pages/MainPage/MainPage.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchRecipes } from 'redux/recipes/operations';
import { selectSearched } from 'redux/recipes/selectors';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [query, setQuery] = useState(searchParams.get('query'));
  const searchResults = useSelector(selectSearched);
  const [recipes, setRecipes] = useState(searchResults);

  const options = ['title', 'ingredients'];
  const [filter, setFilter] = useState(options[0]);

  useEffect(() => {
    setRecipes(searchResults);
  }, [searchResults]);
  useEffect(() => {
    setSearchParams(filter);
  }, [filter, setSearchParams]);

  useEffect(() => {
    setQuery(searchParams.get('query'));
  }, [searchParams]);

  useEffect(() => {
    if (query) {
    }
  }, [dispatch, filter, query]);

  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: e.target.search.value });
  };

  return (
    <Container style={{ paddingTop: '100px' }}>
      <div>
        <SearchForm handleSubmit={handleSearchSubmit} />
        <SearchFilter
          handleFilterSelect={option => {
            setFilter(option);
          }}
        />
        <CategoryList>
          {recipes.length > 0 &&
            recipes.map(result => <li key={result._id}>{result.title}</li>)}
        </CategoryList>
      </div>
    </Container>
  );
}
