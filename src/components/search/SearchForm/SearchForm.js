import { SearchBtn } from 'components/Buttons/SearchBtn/SearchBth';
import { SearchFormInput, SearchFormStyled } from './SearchForm.styled';
import { useState } from 'react';

export const SearchForm = ({ handleSubmit, isLoading, initialValue }) => {
  const [isEmpty, setIsEmpty] = useState(true);
  return (
    <SearchFormStyled onSubmit={handleSubmit} isLoading={isLoading}>
      <SearchFormInput
        type="text"
        name="search"
        autoFocus
        placeholder="Beef"
        defaultValue={initialValue}
        onChange={e => {
          e.target.value.trim() && setIsEmpty(false);
        }}
      />
      <SearchBtn disabled={isLoading || isEmpty} />
    </SearchFormStyled>
  );
};
