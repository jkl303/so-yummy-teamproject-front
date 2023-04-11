import { BiChevronDown } from 'react-icons/bi';
import {
  SearchSelect,
  SearchSelectWrap,
  SelectDropdown,
  SelectHead,
  SelectLabel,
  SelectOptionStyled,
  SelectOptionsList,
  SelectUnfoldBtn,
} from './SearchFilter.styled';
import { useState } from 'react';

const SelectOption = ({ checked, handleChange, handleClick, text }) => {
  return (
    <SelectOptionStyled>
      <input
        type="radio"
        name="searchOption"
        value={text}
        id={text}
        checked={checked}
        onChange={handleChange}
        onClick={handleClick}
      />
      <label htmlFor={text}>{text}</label>
    </SelectOptionStyled>
  );
};

export const SearchFilter = ({
  handleFilterSelect,
  options = ['title', 'ingredients'],
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState(options[0]);

  const handleChange = option => {
    setFilter(option);
    handleFilterSelect(option);
  };

  return (
    <SearchSelectWrap>
      <SelectLabel>Search by: </SelectLabel>
      <SearchSelect
        onMouseLeave={() => {
          setIsOpen(false);
        }}
      >
        <SelectHead>
          {filter}
          <SelectUnfoldBtn
            type="button"
            isOpen={isOpen}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <BiChevronDown size={20} />
          </SelectUnfoldBtn>
        </SelectHead>

        <SelectDropdown>
          <SelectOptionsList isOpen={isOpen}>
            {options.map(option => (
              <SelectOption
                key={option}
                checked={filter === option}
                handleChange={() => handleChange(option)}
                handleClick={() => {
                  setIsOpen(false);
                }}
                text={option}
              />
            ))}
          </SelectOptionsList>
        </SelectDropdown>
      </SearchSelect>
    </SearchSelectWrap>
  );
};
