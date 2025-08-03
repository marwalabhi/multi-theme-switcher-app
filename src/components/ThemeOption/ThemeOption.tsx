const ThemeOption = ({ theme }: any) => {
  const setTheme = () => {
    document.querySelector('body')?.setAttribute('data-theme', theme);
  };

  return <div onClick={setTheme} className="theme-option" id={`theme-${theme}`}></div>;
};

export default ThemeOption;
