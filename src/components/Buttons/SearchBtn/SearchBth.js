import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const SearchBtn = () => {
  /* const location = useLocation();
  const inverted = location.pathname.includes('/search') */
  const inverted = false;
  return (
    <CustomBtn
      type="submit"
      variant={inverted ? 'changeBgInvert' : 'changeBg'}
      sizes={{
        m: { w: 113, h: 52, padH: 32, padV: 16 },
        t: { w: 161, h: 58, padH: 52, padV: 16 },
        d: { h: 70, padV: 23 },
      }}
    >
      Search
    </CustomBtn>
  );
};
