import { useState } from 'react';
import { useField } from 'formik';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { FileFieldStyled } from './FileField.styled';
import { ReactComponent as RecipeImg } from 'images/svg/recipeImg.svg';
import { ReactComponent as RecipeImgDesktop } from 'images/svg/recipeImgDesktop.svg';

export const FileField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);
  const [picture, setPicture] = useState(null);
  const { width } = useWindowDimensions();

  const onChange = e => {
    setValue(e.target.files[0]);
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      setPicture(reader.result);
    };

    console.log(props.values);
  };

  return (
    <FileFieldStyled>
      {picture ? (
        <img src={picture} alt="recipeImg" />
      ) : width < 1440 ? (
        <RecipeImg />
      ) : (
        <RecipeImgDesktop />
      )}
      <input {...props} onChange={onChange} onBlur={setTouched} />
    </FileFieldStyled>
  );
};
