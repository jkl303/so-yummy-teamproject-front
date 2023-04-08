import { StyledLoader } from './Loader.styled';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
  return (
    <StyledLoader>
      <Audio
        height="200"
        width="200"
        radius="9"
        color="var(--accent)"
        ariaLabel="loading"
        wrapperStyle
      />
    </StyledLoader>
  );
}
