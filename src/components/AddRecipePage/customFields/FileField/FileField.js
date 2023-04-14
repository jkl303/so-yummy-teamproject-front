import { useState } from 'react';
import { useField } from 'formik';
import { FileFieldStyled } from './FileField.styled';
import { ReactComponent as RecipeImg } from 'images/svg/recipeImg.svg';

export const FileField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);
  const [picture, setPicture] = useState(null);

  function handleFileUpload(event) {}

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
      {picture ? <img src={picture} alt="recipeImg" /> : <RecipeImg />}
      <input {...props} onChange={onChange} onBlur={setTouched} />
    </FileFieldStyled>
  );
};
