import styled from 'styled-components';
import spinachTop from 'images/mobile/spinach-top375.png';
import spinachTopTablet from 'images/tablet/spinach-top768.png';
import spinachTopDesk from 'images/desktop/spinach-top1440.png';
import spinach from 'images/mobile/spinach-leaves-main375.png';
import spinachTablet from 'images/tablet/spinach-leaves-main768.png';
import spinachDesk from 'images/desktop/spinach-leaves-main1440.png';

export const HeroWrap = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 375px;
  padding: 132px 27px 147px;
  align-items: center;
  overflow: hidden;

  background-image: url(${spinach});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    max-width: 768px;
    padding: 159px 10px 202px 32px;
    background-image: url(${spinachTablet});
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 126px 184px 235px 100px;
    background-image: url(${spinachDesk});
  }
`;

export const BgLeaveTop = styled.div`
  position: absolute;
  top: 48px;
  left: 0;
  z-index: -2;
  width: 40px;
  height: 184px;
  background-image: url(${spinachTop});
  background-position: 0 0;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url(${spinachTopTablet});
    width: 60px;
    height: 315px;
  }

  @media screen and (min-width: 768px) {
    background-image: url(${spinachTopDesk});
    width: 110px;
    height: 400px;
  }
`;

export const Wrap = styled.div`
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 60px;
  line-height: 60px;
  margin-bottom: 14px;

  @media screen and (min-width: 768px) {
    font-size: 72px;
    line-height: 72px;
    margin-bottom: 24px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 100px;
    line-height: 100px;
    margin-bottom: 14px;
  }
`;

export const HeroText = styled.p`
  width: 248px;
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    width: 340px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 24px;
    width: 465px;
  }
`;

export const BgElement = styled.div`
  position: absolute;
  z-index: -1;
  left: 70%;
  bottom: 10%;
  background-color: #ebf3d4;
  width: 506px;
  height: 542px;
  border-bottom-left-radius: 10%;
  /* transform: skewX(-10deg); */
  transform: rotate(32deg);

  @media screen and (min-width: 768px) {
    width: 753px;
    height: 730px;
    transform: skewX(-5deg) rotate(27deg);
  }

  @media screen and (min-width: 1440px) {
    width: 941px;
    height: 912px;
    border-bottom-left-radius: 130px;
    transform: skewX(-20deg) rotate(11deg);
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 320px) {
    max-width: 375px;
    padding-left: 16px;
    padding-right: 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: 1439px) {
    max-width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;

  gap: 32px;

  @media screen and (min-width: 768px) {
    gap: 50px;
  }

  @media screen and (min-width: 1440px) {
    gap: 100px;
  }
`;
