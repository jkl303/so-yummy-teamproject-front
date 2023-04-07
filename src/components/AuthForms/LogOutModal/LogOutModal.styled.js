import styled from 'styled-components';

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
  background-color: #fafafa;
`;

export const Text = styled.p`
  margin-bottom: 24px;
  font-size: 14px;
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
  }
  :last-of-type {
    background-color: #d9d9d9;
    color: #23262a;
  }
`;
