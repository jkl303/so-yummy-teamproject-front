import { StyledLoader } from './Loader.styled';
import { Audio } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <StyledLoader>
      <Audio
        height="200"
        width="200"
        radius="9"
        color="#22252A"
        ariaLabel="loading"
        wrapperStyle
      />
    </StyledLoader>
  );
};
