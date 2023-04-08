import styled from 'styled-components';
import { FiUser, FiPlus, FiEdit2 } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';

export const FormContainer = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
  border-radius: 24px;
  padding: 32px 24px;

  @media screen and (min-width: 768px) {
    padding: 50px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 60px 50px;
  }
`;

export const Button = styled.button`
  width: 282px;
  height: 49px;
  margin-top: 24px;
  color: #fafafa;
  background-color: #8baa36;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  :hover,
  :focus {
    color: #22252a;
  }
  :active {
    background: #7c9931;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
    margin-top: 32px;
  }
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 282px;
  max-height: 48px;
  border: 1px solid #23262a;
  background: #fafafa;
  border-radius: 6px;
  outline-width: 0rem;
  padding: 13px 40px;
  margin-top: 48px;

  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: #23262a;

  opacity: 0.8;

  &[type='file'] {
    display: none;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 59px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 52px;
  }
`;

export const InputWrap = styled.label`
  position: relative;
`;

export const InputFileWrap = styled.label`
  position: relative;
  left: 20px;
  display: block;
  background: #8baa36;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  margin-top: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 81px;
    width: 28px;
    height: 28px;

    left: 25px;
  }

  @media screen and (min-width: 1440px) {
    bottom: 10px;
  }
`;

export const Edit = styled(FiEdit2)`
  position: absolute;
  bottom: 16px;
  right: 15px;
  color: #23262a;
`;

export const User = styled(FiUser)`
  position: absolute;
  bottom: 16px;
  left: 15px;
  color: #23262a;
`;

export const Plus = styled(FiPlus)`
  position: absolute;
  width: 18px;
  height: 18px;
  bottom: 3px;
  left: 3px;
  color: #fafafa;

  @media screen and (min-width: 768px) {
    bottom: 5px;
    left: 5px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  padding: 10px;

  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const IconClose = styled(CgClose)`
  width: 20px;
  height: 20px;
`;

export const UserPhoto = styled.img`
  position: absolute;
  width: 88px;
  height: 88px;
  background: #d9d9d9;
  border-radius: 50%;
  top: 32px;
  left: 121px;

  @media screen and (min-width: 768px) {
    width: 103px;
    height: 103px;

    top: 50px;
    left: 188px;
  }

  @media screen and (min-width: 1440px) {
    left: 198.5px;
  }
`;
