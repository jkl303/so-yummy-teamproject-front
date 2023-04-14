import { useField } from 'formik';
import { FileFieldStyled, RecipeImgStyled } from './FileField.styled';

export const FileField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = e => {
    setValue(e.target.files[0]);
  };
  return (
    <FileFieldStyled>
      <RecipeImgStyled />
      <input {...props} onChange={onChange} onBlur={setTouched} />
    </FileFieldStyled>
  );
};
