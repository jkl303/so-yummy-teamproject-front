import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const HeroAuthBtn = ({ active, children }) => {
  const sizes = {
    m: { w: 95, h: 45, padH: 24, padV: 12 },
    t: { w: 141, h: 67, padH: 44, padV: 22 },
  };
  return active ? (
    <CustomBtn as="a" variant="changeBgInvert" sizes={sizes}>
      {children}
    </CustomBtn>
  ) : (
    <CustomBtn as="a" variant="changeOutline" sizes={sizes}>
      {children}
    </CustomBtn>
  );
};
