import { BasicBtn } from 'components/Buttons/templates/BasicBtn/BasicBtn.styled';

export const LogOutModalBtn = ({ text, secondary }) => {
  return secondary ? (
    <BasicBtn type="button" variant="changeBg" origin="secondary" size="wide">
      {text}
    </BasicBtn>
  ) : (
    <BasicBtn type="button" variant="changeBg" size="wide">
      {text}
    </BasicBtn>
  );
};
