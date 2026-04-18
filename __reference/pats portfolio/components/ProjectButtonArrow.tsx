import { useTheme } from '../contexts/ThemeContext';

export function ProjectButtonArrow() {
  const { theme } = useTheme();
  
  return (
    <>
      <img 
        src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/button-arrow.svg"
        alt="" 
        className={`button-arrow ${theme === 'light' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'dark' ? 'absolute' : 'relative' }}
      />
      <img 
        src="https://raw.githubusercontent.com/Patrick-Sherlund/patrick-sherlund-portfolio/refs/heads/master/src/assets/images/pages/button-arrow-dark.svg"
        alt="" 
        className={`button-arrow ${theme === 'dark' ? 'visible' : 'hidden'}`}
        style={{ position: theme === 'light' ? 'absolute' : 'relative' }}
      />
    </>
  );
}
