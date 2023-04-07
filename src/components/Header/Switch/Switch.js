import { SwitchLabel, SwitchInput, SwitchSlider } from './SwitchStyled';

const Switch = ({ onToggle }) => {
  return (
    <SwitchLabel>
      <SwitchInput type="checkbox" />
      <SwitchSlider />
    </SwitchLabel>
  );
};
export default Switch;
