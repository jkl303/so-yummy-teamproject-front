import { useField } from 'formik';
import { SelectFieldStyled } from './SelectField.styled';

export const SelectField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return (
    <SelectFieldStyled
      {...props}
      onChange={onChange}
      onBlur={setTouched}
      classNamePrefix="Select"
      placeholder=""
    />
  );
};
