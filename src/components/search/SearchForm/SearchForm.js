import { SearchBtn } from 'components/Buttons/SearchBtn/SearchBth';
import { SearchFormInput, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ handleSubmit }) => {
  return (
    <SearchFormStyled onSubmit={handleSubmit}>
      <SearchFormInput type="text" name="search" autoFocus placeholder="Beef" />
      <SearchBtn />
    </SearchFormStyled>
  );
};
