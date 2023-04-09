import styled from 'styled-components';

export const SearchSelectWrap = styled.div`
  display: flex;
  gap: 15px;

  justify-content: center;
  align-items: baseline;
`;

export const SearchSelect = styled.div`
  width: 146px;
`;

export const SelectLabel = styled.span`
  color: ${({ theme: { colors } }) => colors.title};
`;

export const SelectHead = styled.div`
  display: flex;
  justify-content: space-between;

  height: 34px;
  padding: 8px 0 0px 14px;

  border-radius: 6px 6px 0 0;
  background-color: ${({ theme: { colors } }) => colors.bg};

  text-transform: capitalize;
`;

export const SelectUnfoldBtn = styled.button`
  margin-top: -10px;
  background-color: transparent;
  border: none;

  color: ${({ theme: { colors } }) => colors.accent};

  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};

  transition: transform 250ms ease-out;
`;

export const SelectDropdown = styled.form`
  overflow: hidden;
`;

export const SelectOptionsList = styled.ul`
  position: relative;
  transform: translateY(${props => (props.isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease-out;
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
  }

  input {
    width: 0;
    height: 0;
  }

  input:checked + label {
    background-color: ${({ theme: { colors } }) => colors.ingr};
  }

  &:last-child {
    border-radius: 0 0 6px 6px;
  }
`;
