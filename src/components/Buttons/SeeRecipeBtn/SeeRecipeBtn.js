import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';
import { useLocation } from 'react-router-dom';

export const SeeRecipeBtn = () => {
  const location = useLocation();
  const inverted = location.pathname.includes('my');
  return (
    <CustomBtn
      variant={inverted ? 'changeBgInvert' : 'changeBg'}
      sizes={{
        m: { w: 80, h: 27, padH: 14, padV: 6, fz: 10 },
        t: { w: 138, h: 45, padH: 32, padV: 12, fz: 14 },
        d: inverted
          ? { w: 172, h: 59, padH: 44, padV: 18 }
          : { w: 160, h: 54, padH: 38, padV: 14 },
      }}
    >
      See recipe
    </CustomBtn>
  );
};
