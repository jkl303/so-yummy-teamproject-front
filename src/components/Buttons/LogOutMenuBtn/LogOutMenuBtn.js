import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const LogOutMenuBtn = () => {
  return (
    <CustomBtn
      as="button"
      type="button"
      variant="changeBgInvert"
      sizes={{
        m: { w: 125, h: 43, padH: 27, padV: 12 },
        t: { w: 141, padH: 32, fz: 14 },
      }}
    >
      Log Out
    </CustomBtn>
  );
};
