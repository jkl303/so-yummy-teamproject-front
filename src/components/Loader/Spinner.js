import { CgSpinner } from 'react-icons/cg';
import { keyframes } from 'styled-components';
import styled from 'styled-components';

export const Spinner = () => {
  return (
    <>
      <Icon size="25px" className="Spinner" />
    </>
  );
};

const Spin = keyframes`
 0% {
  transform: rotate(0deg);
}
 100% {
  transform: rotate(1turn);
}`;

const Icon = styled(CgSpinner)`
  color: #fafafa;
  animation-name: ${Spin};
  animation-duration: 1000ms;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;
