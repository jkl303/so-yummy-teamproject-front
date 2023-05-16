import { useEffect, useState } from 'react';
import { useField } from 'formik';
import Select from 'react-select';
import { MeasureFieldStyled } from './MeasureField.styled';

export const MeasureField = props => {
  const [field, state, { setValue }] = useField(props.field.name);
  const [num, setNum] = useState(1);
  const [measure, setMeasure] = useState('pcs');

  const addAmount = e => {
    setNum(e.target.value);
  };

  const addMeasure = ({ value }) => {
    setMeasure(value);
  };

  useEffect(() => {
    setValue(`${num} ${measure}`);
  }, [num, measure]);

  return (
    <MeasureFieldStyled>
      <input
        {...props}
        type="number"
        onChange={addAmount}
        autoComplete="off"
        placeholder="1"
      />
      <Select
        {...props}
        onChange={addMeasure}
        defaultValue={{
          value: 'pcs',
          label: 'pcs',
        }}
        classNamePrefix="Select"
        isSearchable={false}
      />
    </MeasureFieldStyled>
  );
};
