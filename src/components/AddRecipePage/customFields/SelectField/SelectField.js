import { useField } from 'formik';
import Select from 'react-select';

export const SelectField = props => {
  const [field, state, { setValue, setTouched }] = useField(props.field.name);

  const onChange = ({ value }) => {
    setValue(value);
  };

  return <Select {...props} onChange={onChange} onBlur={setTouched} />;
};
