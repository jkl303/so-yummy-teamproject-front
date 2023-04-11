import { useToggleTheme } from 'components/App';
import { SwitchLabel, SwitchInput, SwitchSlider } from './SwitchStyled';
import { useState } from 'react';

const Switch = () => {
  const { toggleTheme } = useToggleTheme();
  const [isToggled, setIsTogglet] = useState(false);

  const onToggle = () => {
    setIsTogglet(!isToggled);
    toggleTheme();
  };

  return (
    <SwitchLabel>
      <SwitchInput type="checkbox" checked={isToggled} onChange={onToggle} />
      <SwitchSlider />
    </SwitchLabel>
  );
};
export default Switch;
