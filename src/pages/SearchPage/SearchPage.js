// import {} from './SearchPage.styled';

import { SearchFilter } from 'components/search/SearchFilter/SearchFilter';
import { SearchForm } from 'components/search/SearchForm/SearchForm';
import { CategoryList, Container } from 'pages/MainPage/MainPage.styled';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { fetchSearched } from './fetchSearched';
import { MarginWrap } from 'components/search/PositionWrap/MarginWrap';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [query, setQuery] = useState(searchParams.get('query'));
  const [recipes, setRecipes] = useState([]);

  const options = ['title', 'ingredients'];
  const [filter, setFilter] = useState(options[0]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const result = await fetchSearched({ filter, query });
      result ? setRecipes(result.data) : setRecipes([]);
    };
    query && fetchRecipes();
  }, [filter, query, recipes]);

  useEffect(() => {
    setSearchParams({ filter });
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
        <MarginWrap mB={{ mob: '24', tab: '28' }}>
          <SearchForm handleSubmit={handleSearchSubmit} />
        </MarginWrap>
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
