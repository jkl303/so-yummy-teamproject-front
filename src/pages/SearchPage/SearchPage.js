// import {} from './SearchPage.styled';

import { SearchFilter } from 'components/search/SearchFilter/SearchFilter';
import { SearchForm } from 'components/search/SearchForm/SearchForm';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearched } from './fetchSearched';
import { MarginWrap } from 'components/search/MarginWrap/MarginWrap';
import { RecipeCard } from 'components/Main/RecipeCard/RecipeCard';
import { RecipeList } from 'components/search/RecipeList/RecipeList.styled';
import { PageWrap } from 'components/search/PageWrap/PageWrap';
import { SearchNotFound } from 'components/search/SearchNotFound/SearchNotFound';
import { toast } from 'react-hot-toast';
import { ContainerComponent } from 'components/Container/Container.styled';
import Container from 'components/Container/Container';

export default function SearchPage() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const options = ['title', 'ingredients'];
  const [filter, setFilter] = useState(options[0]);
  const [isLoading, setIsLoading] = useState(false);

  // to avoid rerender on filter change
  const filterRef = useRef(filter);

  useEffect(() => {
    const queryOuter = searchParams.get('query');

    const fetchRecipes = async () => {
      const result = await fetchSearched({
        query: queryOuter,
        filter: filterRef,
      });

      (await result?.data.length) && setRecipes(result.data ?? []);
    };

    try {
      setIsLoading(true);
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
      <ContainerComponent>
        <PageWrap titleText="Search" padT={{ mob: 100 }} padB={{ mob: 200 }}>
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
          {recipes.length > 0 ? (
            <RecipeList style={{ display: 'flex', flexWrap: 'wrap' }}>
              {recipes.map(recipe => (
                <RecipeCard key={recipe._id} recipe={recipe} />
              ))}
            </RecipeList>
          ) : query ? (
            <SearchNotFound />
          ) : null}
        </PageWrap>
      </ContainerComponent>
    </Container>
  );
}
