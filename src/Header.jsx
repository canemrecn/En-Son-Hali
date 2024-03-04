import React from 'react';
import { useTheme } from './ThemeContext';

function Header() {
  // Tema bağlamını kullanarak tema durumunu al
  const { theme } = useTheme();

  // Header bileşenini oluştur
  return (
    <header className={`bg-${theme}`}>
      <div className="container">
        <h5>Film Ruleti</h5>
      </div>
    </header>
  );
}

export default Header;
