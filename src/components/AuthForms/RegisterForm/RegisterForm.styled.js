import styled from "styled-components";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { TbCircleCheckFilled, TbCircleXFilled } from "react-icons/tb";
import { MdError } from "react-icons/md";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 335px;
  heigth: 350px;
  padding: 32px 28px 40px;
  color: #fafafa;
  background: #2a2c36;
  border-radius: 30px;
  border: none;
`;

export const Title = styled.h2`
  margin-left: 0;
  margin-bottom: 18px;
  padding: 0;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 45px;
  border-radius: 6px;
  border: 1.5px solid #fafafa33;
  :not(:last-of-type) {
    margin-bottom: 12px;
  }
  :first-of-type {
    border: 1.5px solid ${(props) => props.namecolor};
  }
  :nth-of-type(2) {
    border: 1.5px solid ${(props) => props.emailcolor};
  }
  :last-of-type {
    border: 1.5px solid ${(props) => props.passwordcolor};
  }
  :active {
    border-width: 2px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 40px;
  color: #fafafa;
  background-color: transparent;
  border-radius: 6px;
  border: 0 solid #fafafa00;
  outline-width: 0rem;
  -webkit-box-shadow: inset 0 0 0 50px #2a2c36;
  -webkit-text-fill-color: #fafafabf;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

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
`;

export const UserIcon = styled(FiUser)`
  position: absolute;
  top: 12px;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: ${(props) => props.namecolor};
`;

export const MailIcon = styled(FiMail)`
  position: absolute;
  top: 12px;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: ${(props) => props.emailcolor};
`;

export const LockIcon = styled(FiLock)`
  position: absolute;
  top: 12px;
  left: 14px;
  width: 18px;
  height: 18px;
  stroke: ${(props) => props.passwordcolor};
`;

export const CorrectIcon = styled(TbCircleCheckFilled)`
  position: absolute;
  top: 12px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #3cbc81;
`;

export const WarningIcon = styled(MdError)`
  position: absolute;
  top: 12px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #f6c23e;
`;

export const ErrorIcon = styled(TbCircleXFilled)`
  position: absolute;
  top: 12px;
  right: 14px;
  width: 18px;
  height: 18px;
  color: #e74a3b;
`;
