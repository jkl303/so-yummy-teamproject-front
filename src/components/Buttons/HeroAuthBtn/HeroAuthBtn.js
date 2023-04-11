import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';
import styled from 'styled-components';

const AuthBtnBgInvert = styled(CustomBtn)`
  width: 132px;
  margin-right: 12px;
  :hover,
  :focus {
    background-color: #22252a;
  }
  @media screen and (min-width: 768px) {
    width: 184px;
    margin-right: 18px;
  }
`;

const AuthBtnOutline = styled(CustomBtn)`
  :hover,
  :focus {
    border-color: #8baa36;
    color: #8baa36;
  }
`;

export const HeroAuthBtn = ({ active, text }) => {
  const sizes = {
    m: { w: 95, h: 45, padH: 24, padV: 12 },
    t: { w: 141, h: 67, padH: 44, padV: 22 },
  };
  return active ? (
    <AuthBtnBgInvert as="button" variant="changeBgInvert" sizes={sizes}>
      {text}
    </AuthBtnBgInvert>
  ) : (
    <AuthBtnOutline as="button" variant="changeOutline" sizes={sizes}>
      {text}
    </AuthBtnOutline>
  );
};
