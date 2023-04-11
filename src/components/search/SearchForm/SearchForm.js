import { SearchBtn } from 'components/Buttons/SearchBtn/SearchBth';
import { SearchFormInput, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit, isLoading }) => {
  return (
    <SearchFormStyled onSubmit={handleSubmit} isLoading={isLoading}>
      <SearchFormInput
        type="text"
        name="search"
        autoFocus
        placeholder="Beef"
        disabled={isLoading}
      />
      <SearchBtn />
    </SearchFormStyled>
  );
};
