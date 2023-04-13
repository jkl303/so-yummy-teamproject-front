import { useState } from 'react';
import { useField } from 'formik';
import Select from 'react-select';

export const MeasureField = props => {
  const [field, state, { setValue }] = useField(props.field.name);
  const [num, setNum] = useState(0);
  const [measure, setMeasure] = useState('tbs');

  const addNumber = e => {
    measure ? setValue(`${e.target.value} ${measure}`) : setNum(e.target.value);
  };

  const addMeasure = ({ value }) => {
    num ? setValue(`${num} ${value}`) : setMeasure(value);
  };

  return (
    <div>
      <input name={props.field.name} type="number" onChange={addNumber} />
      <Select
        {...props}
        onChange={addMeasure}
        defaultValue={{
          value: 'tbs',
          label: 'tbs',
        }}
      />
    </div>
  );
};
