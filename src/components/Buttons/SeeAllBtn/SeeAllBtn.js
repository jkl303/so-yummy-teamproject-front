import { BasicBtn } from 'components/Buttons/templates/BasicBtn/BasicBtn.styled';
import { Link } from 'react-router-dom';

export const SeeAllBtn = () => {
  return (
    <BasicBtn type="button" variant="changeBg" size="sm" as={Link}>
      See all
    </BasicBtn>
  );
};
