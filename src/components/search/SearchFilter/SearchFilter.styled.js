import styled from 'styled-components';

export const SearchSelectWrap = styled.div`
  display: flex;
  gap: 15px;

  justify-content: center;
  align-items: baseline;

  font-size: 12px;
  color: ${({ theme: { colors } }) => colors.title};

  @media screen and (min-width: 768px) {
    gap: 18px;

    font-size: 14px;
  }
`;

export const SearchSelect = styled.div`
  width: 146px;

  @media screen and (min-width: 768px) {
    width: 175px;
  }
`;

export const SelectLabel = styled.span`
  color: ${({ theme: { colors } }) => colors.title};
`;

export const SelectHead = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;

  height: 34px;
  padding: 8px 14px;

  border-radius: ${({ isOpen }) => (isOpen ? '6px 6px 0 0' : '6px')};
  background-color: ${({ theme: { colors } }) => colors.input};

  text-transform: capitalize;

  transition: border-radius 250ms ease-in-out;
  @media screen and (min-width: 768px) {
    height: 41px;
  }
`;

export const SelectUnfoldBtn = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  aspect-ratio: 1;
  height: 34px;

  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${({ theme: { colors } }) => colors.accent};

  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};

  transition: transform 250ms ease-out;

  @media screen and (min-width: 768px) {
    height: 41px;
  }
`;

export const SelectDropdown = styled.form`
  overflow: hidden;
`;

export const SelectOptionsList = styled.ul`
  position: relative;
  background-color: ${({ theme: { colors } }) => colors.searchDropdown};
  border: 1px solid #75757510;
  border-radius: 0 0 6px 6px;
  transform: translateY(${props => (props.isOpen ? '0' : '-100%')});

  transition: transform 250ms ease-out;
`;

export const SelectOptionStyled = styled.li`
  color: ${({ theme: { colors } }) => colors.txtInputInactive};

  label {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 34px;
    padding: 8px 14px;
    text-transform: capitalize;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.ingr};
    }

    @media screen and (min-width: 768px) {
      height: 41px;
    }
  }

  input {
    width: 0;
    height: 0;
  }

  input:checked + label {
    font-weight: 600;
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`;
