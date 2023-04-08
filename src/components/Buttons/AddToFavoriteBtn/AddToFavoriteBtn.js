import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const AddToFavoriteBtn = () => {
  return (
    <CustomBtn
      type="button"
      variant="changeAll"
      sizes={{
        m: { w: 150, h: 35, padH: 18, padV: 10, fz: 10 },
        t: { w: 270, h: 59, padH: 44, padV: 18 },
      }}
    >
      Add to favorite recipes
    </CustomBtn>
  );
};
