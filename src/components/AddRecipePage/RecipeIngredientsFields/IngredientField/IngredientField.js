import { useField } from 'formik';
import { IngredientFieldStyled } from './IngredientField.styled';

export const IngredientField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <IngredientFieldStyled
      {...props}
      onChange={onChange}
      onBlur={setTouched}
      classNamePrefix="Select"
      placeholder="Start typing here"
    />
  );
};
