import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';
import { useLocation } from 'react-router-dom';

export const SearchBtn = () => {
  const location = useLocation();
  const inverted = location.pathname.includes('/search');

  return (
    <CustomBtn
      as="button"
      type="submit"
      variant={inverted ? 'changeBgInvert' : 'changeBg'}
      sizes={{
        m: { w: 113, h: 53, padH: 32, padV: 16 },
        t: { w: 161, h: 57, padH: 52, padV: 16 },
        d: { h: 70, padV: 23 },
      }}
    >
      Search
    </CustomBtn>
  );
};
