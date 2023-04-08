import styled from 'styled-components';
import { RxEnvelopeClosed } from 'react-icons/rx';

export const SubscribeFormWrap = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    width: 339px;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const TextBeforeSubscribe = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  margin-top: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #fafafa;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: #fafafa;
`;

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 43.5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-bottom: 37.5px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0;
  } ;
`;

export const Field = styled.label`
 position: relative;
  display: flex;
  width: 204px;
  height: 38px;
@media screen and (min-width: 768px) {
    width: 259px;
    height: 50px;
  };

  @media screen and (min-width: 1440px) {
    width: 339px;
     height: 58px;
`;

export const Input = styled.input`
  padding: 11.5px 42px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  background: #22252a;
  color: #fafafa;
  outline: none;
  &:focus,
  &:hover {
    border: 1px solid #ffffff;
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    padding: 14.5px 40px;
    font-size: 14px;
  };
    @media screen and (min-width: 1440px) {
    padding: 17.5px 70.5px 17.5px 51.5px;
    font-size: 18px;
`;

export const EmailIcon = styled(RxEnvelopeClosed)`
  position: absolute;
  top: 13px;
  left: 14px;
  width: 16px;
  height: 12px;
  color: #fafafa;
  :hover,
  :focus {
    color: #ffffff;
  }
  :active {
    color: #ffffff;
  }
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    top: 17px;
    left: 15px;
  }
  @media screen and (min-width: 1440px) {
    top: 21.5px;
    left: 15.5px;
  } ;
`;

export const Button = styled.button`
  width: 204px;
  height: 38px;
  padding: 11px 71px;
  background: #8baa36;
  border-radius: 6px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  color: #fafafa;
  cursor: pointer;
  &:focus,
  &:hover {
    color: #22252a;
  }
  @media screen and (min-width: 768px) {
    width: 171px;
    height: 50px;
    padding: 16px 50px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
    padding: 21px 134px;
  }
`;
