import { useTheme } from "./ThemeContext";

const ThemeComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ThemeComponent;
