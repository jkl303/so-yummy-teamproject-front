import styled from 'styled-components';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { mediaQueries } from 'style/mediaQueries';

export const SubscribeFormWrap = styled.div`
  margin: 0 auto;
  max-width: 204px;

  ${mediaQueries('tablet')`
   max-width: 442px;
    `};

  ${mediaQueries('desktop')`
    max-width: 339px;
    flex-direction: column;
    justify-content: flex-start;
     margin: 0;`};
`;

export const TextBeforeSubscribe = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: var(--txt-dark);
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: var(--txt-dark);
`;

export const Form = styled.form.attrs({ autocomplete: 'off' })`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 44px;

  ${mediaQueries('tablet')`
    flex-direction: row;
    justify-content: center;
    gap: 12px;
    margin-bottom: 38px;
    `};

  ${mediaQueries('desktop')`
    flex-direction: column;
    gap: 16px;
    margin-bottom: 0;`};
`;

export const Field = styled.label`
  position: relative;
  display: flex;
`;

export const Input = styled.input`
  width: 204px;
  height: 38px;
  padding: 10px 10px 10px 42px;
  border: 1px solid var(--txt-dark);
  border-radius: 6px;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: var(--txt-dark);
  background-color: ${({ theme: { colors } }) => colors.bgFooter};

  outline: none;
  &:focus,
  &:hover {
    border: 1px solid #ffffff;
    color: #ffffff;
  }

  ${mediaQueries('tablet')`
    width: 259px;
    height: 50px;
    padding: 14.5px 10px 14.5px 51px;
    font-size: 14px;`};

  ${mediaQueries('desktop')`
    width: 338px;
    height: 59px;
    padding: 17.5px 10px 17.5px 51.5px;
    font-size: 18px;
    `};
`;

export const EmailIcon = styled(RxEnvelopeClosed)`
  position: absolute;
  top: 13px;
  left: 14px;
  width: 16px;
  height: 12px;
  color: var(--txt-dark);
  :hover,
  :focus {
    color: #ffffff;
  }
  :active {
    color: #ffffff;
  }

  ${mediaQueries('tablet')`
    width: 20px;
    height: 16px;
    top: 17px;
    left: 15px;`};

  ${mediaQueries('desktop')`
    top: 21.5px;
    left: 15.5px;`};
`;

export const Button = styled.button`
  width: 204px;
  height: 38px;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.14;
  background-color: ${({ theme: { colors } }) => colors.btnFoot};
  color: var(--txt-dark);
  cursor: pointer;
  &:focus,
  &:hover {
    color: ${({ theme: { colors } }) => colors.bgFooter};
  }

  ${mediaQueries('tablet')`
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 1.12;`};

  ${mediaQueries('desktop')`
    width: 339px;
    height: 60px;
    `};
`;
