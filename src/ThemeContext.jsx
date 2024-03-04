import React, { createContext, useContext } from 'react';

// Tema bağlamını oluştur
const ThemeContext = createContext();

// Tema bağlamını kullanarak tema durumunu sağlayan özel bir kancayı (hook) tanımla
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Tema sağlayıcı bileşeni tanımla (artık tema değiştirme işlevi içermiyor)
export const ThemeProvider = ({ children }) => {
  // Tema durumu için başlangıç değeri olarak "light" seç
  const theme = 'dark';

  // Tema sağlayıcı bileşeni oluştur ve alt bileşenlere tema durumunu sağla
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
