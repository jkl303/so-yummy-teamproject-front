import styled from "styled-components";

export const SwitchLabel = styled.label`
  margin-left: 50px;
  position: relative;
  width: 61px;
  height: 27px;
  cursor: pointer;
`;

export const SwitchInput = styled.input`
  position: relative;
  z-index: 1;
  appearance: none;

  :checked ~ span {
    background: #8baa36;

    ::before {
      left: 37px;
    }
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efefef;
  box-shadow: inset 0px 6px 8px 3px rgba(0, 0, 0, 0.1);
  border-radius: 50px;

  transition: 0.5s;

  ::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 3px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: 0.5s;
    background: linear-gradient(180deg, #ffffff 0%, #e8eaea 100%);
    filter: drop-shadow(2px 1px 6px rgba(0, 0, 0, 0.25));
  }
`;
