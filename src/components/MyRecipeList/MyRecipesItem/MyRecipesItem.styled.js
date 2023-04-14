import styled from 'styled-components';
import { FiTrash2 } from 'react-icons/fi';

export const Item = styled.div`
  background: ${({ theme: { colors } }) => colors.bgSec};
`;

export const WrapperItem = styled.div`
  background: ${({ theme: { colors } }) => colors.bgSec};
  border-radius: 8px;
  display: flex;
  position: relative;
  padding: 40px;
  @media screen and (max-width: 767px) {
    margin: 14px 9px;
  }
  @media screen and (min-width: 768px) {
    margin: 28px 24px;
  }
  @media screen and (min-width: 1440px) {
    margin: 40px;
  }
`;

export const Img = styled.img`
  display: block;
  border-radius: 8px;
  @media screen and (max-width: 767px) {
    width: 124px;
    height: 124px;
  }
  @media screen and (min-width: 768px) {
    width: 228px;
    height: 232px;
  }
  @media screen and (min-width: 1440px) {
    width: 318px;
    height: 324px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (max-width: 767px) {
    padding: 6px 22px 0px 14px;
  }
  @media screen and (min-width: 768px) {
    padding: 0px 51px 0px 24px;
  }
  @media screen and (min-width: 1440px) {
    padding: 0px 54px 0px 22px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.subtitle}; /* '#3e4462' */
  margin-bottom: 14px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 28px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  letter-spacing: -0.02em;
  color: ${({ theme: { colors } }) => colors.txt}; /* #23262a;*/
  @media screen and (max-width: 767px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const TextTime = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  line-height: 1.4;
  letter-spacing: -0.24px;
  color: ${({ theme: { colors } }) => colors.subtitle}; /* #3e4462; */
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const WrapperButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
  padding: 40px;
`;

export const IconDelete = styled(FiTrash2)`
  color: white;
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
`;

export const BtnDelete = styled.button`
  background: ${({ theme: { colors } }) => colors.btnFoot};
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  :hover,
  :focus {
    background: ${({ theme: { colors } }) => colors.btn};
  }
  @media screen and (max-width: 767px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 38px;
    height: 38px;
  }
  @media screen and (min-width: 1440px) {
    width: 40px;
    height: 40px;
  }
`;
