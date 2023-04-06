// import {} from './Header.styled';
import { useState } from 'react';

export default function Header({ toggleTheme, isDarkTheme }) {
  const [isToggled, setIsTogglet] = useState(isDarkTheme);

  const onToggle = () => {
    setIsTogglet(!isToggled);
    toggleTheme();
  };

  return (
    <div>
      Header
      <input type="checkbox" chacked={isToggled} onChange={onToggle} />
    </div>
  );
}
