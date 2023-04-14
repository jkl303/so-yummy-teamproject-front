// import {} from './SearchPage.styled';

import { SearchFilter } from 'components/search/SearchFilter/SearchFilter';
import { SearchForm } from 'components/search/SearchForm/SearchForm';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearched } from './fetchSearched';
import { MarginWrap } from 'components/search/MarginWrap/MarginWrap';
import { RecipeList } from 'components/search/RecipeList/RecipeList';
import { PageWrap } from 'components/search/PageWrap/PageWrap';
import { SearchNotFound } from 'components/search/SearchNotFound/SearchNotFound';
import { toast } from 'react-hot-toast';
import Container from 'components/Container/Container';
import useWindowDimensions from 'hooks/useWindowDimensions';
import Paginator from 'components/Paginator/Paginator';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [recipes, setRecipes] = useState([]);

  const options = ['title', 'ingredients'];
  const [filter, setFilter] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(false);
  const { width } = useWindowDimensions();

  // to avoid rerender on filter change
  const filterRef = useRef(filter);

  useEffect(() => {
    width >= 1440 ? setItemsPerPage(12) : setItemsPerPage(6);
  }, [width]);

  useEffect(() => {
    const queryOuter = searchParams.get('query');

    const fetchRecipes = async () => {
      const result = await fetchSearched({
        query: queryOuter,
        filter: filterRef.current,
      });
      (await result?.data.length) && setRecipes(result.data ?? []);
    };

    try {
      setIsLoading(true);
      queryOuter && setQuery(queryOuter);
      queryOuter && fetchRecipes();
      setIsLoading(false);
    } catch (e) {
      toast.error(e);
      setIsLoading(false);
    }
  }, [searchParams]);

  const handleSearchSubmit = async e => {
    e.preventDefault();
    const innerQuery = e.target.search.value;
    try {
      setIsLoading(true);
      const result = await fetchSearched({ query: innerQuery, filter });
      (await result?.data?.length) && setRecipes(result.data ?? []);
      setIsLoading(false);
    } catch (e) {
      toast.error(e.message);
      setIsLoading(false);
      setRecipes([]);
    }
    setQuery(innerQuery);
  };

  return (
    <Container>
      <PageWrap titleText="Search">
        <MarginWrap
          mB={{ mob: 24, tab: 28 }}
          mT={{ mob: 50, tab: 40, desk: 50 }}
        >
          <SearchForm
            handleSubmit={handleSearchSubmit}
            isLoading={isLoading}
            initialValue={searchParams.get('query') || ''}
          />
        </MarginWrap>
        <SearchFilter
          handleFilterSelect={option => {
            setFilter(option);
            filterRef.current = option;
          }}
        />
        {recipes.length > itemsPerPage ? (
          <Paginator data={recipes} itemsPerPage={itemsPerPage} noMargin>
            {currentItems => {
              return <RecipeList recipes={currentItems} />;
            }}
          </Paginator>
        ) : recipes.length > 0 ? (
          <RecipeList recipes={recipes} />
        ) : query ? (
          <SearchNotFound />
        ) : null}
      </PageWrap>
    </Container>
  );
}
