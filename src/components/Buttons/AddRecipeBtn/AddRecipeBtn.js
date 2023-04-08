import { CustomBtn } from 'components/Buttons/templates/CustomBtn/CustomBtn.styled';

export const AddRecipeBtn = () => {
  return (
    <CustomBtn
      as="button"
      variant={'changeBg'}
      sizes={{
        m: { w: 129, h: 46, padH: 48, padV: 12, fz: 16 },
        t: { w: 161, h: 52, padH: 64, padV: 14 },
      }}
    >
      Add
    </CustomBtn>
  );
};
