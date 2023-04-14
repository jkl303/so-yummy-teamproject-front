import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #22252a59;
`;

export const ModalWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 330px;
  height: 179px;
  padding: 44px 20px;
  margin-top: 212px;
  border-radius: 30px;
  background-color: ${({ theme: { colors } }) => colors.bgModal};
  animation: isAppearing 300ms ease-in-out;

  @keyframes isAppearing {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 480px;
    height: 215px;
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
    padding: 50px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    font-size: 18px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    top: 24px;
    right: 24px;
    transform: scale(1.2);
  }
`;

export const CloseButtonIcon = styled(RxCross2)`
  color: ${({ theme: { colors } }) => colors.txt};
`;

export const Button = styled.button`
  width: 137px;
  height: 49px;
  margin: 0;
  padding: 14px;
  border: none;
  border-radius: 6px;
  font-size: 14px;

  :first-of-type {
    background-color: #8baa36;
    color: #fafafa;
    margin-right: 8px;
    :hover {
      background-color: #22252a;
    }
  }
  :last-of-type {
    background-color: #d9d9d9;
    color: #23262a;
    :hover {
      color: ${({ theme: { colors } }) => colors.subtitle};
      background-color: transparent;
      border: 1px solid #23262a;
    }
  }

  @media screen and (min-width: 768px) {
    width: 192px;
    height: 59px;
    font-size: 16px;
    :first-of-type {
      margin-right: 16px;
    }
  }
`;
