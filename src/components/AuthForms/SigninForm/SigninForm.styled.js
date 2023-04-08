import styled from 'styled-components';
import { FiMail, FiLock } from 'react-icons/fi';
import { TbCircleXFilled } from 'react-icons/tb';

export const FormContainer = styled.form`
  position: absolute;
  top: 305px;
  display: flex;
  flex-direction: column;
  max-width: 335px;
  heigth: 315px;
  padding: 32px 28px 40px;
  color: #fafafa;
  background: #2a2c36;
  border-radius: 30px;
  border: none;

  @media screen and (min-width: 768px) {
    top: 443px;
    min-width: 500px;
    height: 419px;
    padding: 44px 50px;
  }

  @media screen and (min-width: 1440px) {
    top: 155px;
    right: 12.5%;
  }

  @media screen and (min-width: 1920px) {
    right: 18%;
  }
`;

export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: 40px;
  padding: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-bottom: 50px;
  } ;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  border: 1.5px solid #fafafa33;
  :not(:last-of-type) {
    margin-bottom: 12px;
  }
  :first-of-type {
    border: 1.5px solid ${props => props.emailcolor};
  }
  :last-of-type {
    border: 1.5px solid ${props => props.passwordcolor};
  }
  :active {
    border-width: 2px;
  }

  @media screen and (min-width: 768px) {
    height: 59px;
    :not(:last-of-type) {
      margin-bottom: 24px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 40px;
  color: #fafafa;
  background-color: transparent;
  border-radius: 6px;
  border: 0 solid #fafafa33;
  outline-width: 0rem;
  -webkit-box-shadow: inset 0 0 0 50px #2a2c36;
  -webkit-text-fill-color: #fafafabf;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 16px 50px;
  } ;
`;

// export const ErrorMessage = styled.div`
//   color: red;
//   font-size: 0.8rem;
//   margin-top: 0.5rem;
// `;

export const PasswordVisibilityButton = styled.button`
  position: absolute;
  top: 0;
  right: 40px;
  height: 100%;
  color: #fafafa;
  background-color: transparent;
  border: none;
  outline-width: 0rem;
  cursor: pointer;
  :hover,
  :focus {
    color: #8baa36;
  }
  :active {
    color: #7c9931;
  }

  @media screen and (min-width: 768px) {
    right: 50px;
    font-size: 18px;
  } ;
`;

export const Button = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 28px;
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
    height: 59px;
  } ;
`;

export const MailIcon = styled(FiMail)`
  position: absolute;
  top: 12px;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: ${props => props.emailcolor};

  @media screen and (min-width: 768px) {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  } ;
`;

export const LockIcon = styled(FiLock)`
  position: absolute;
  top: 12px;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: ${props => props.passwordcolor};

  @media screen and (min-width: 768px) {
    top: 17.5px;
    left: 18px;
    width: 24px;
    height: 24px;
  } ;
`;

export const ErrorIcon = styled(TbCircleXFilled)`
  position: absolute;
  top: 12px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #e74a3b;

  @media screen and (min-width: 768px) {
    top: 17.5px;
    right: 18px;
    width: 24px;
    height: 24px;
  } ;
`;
