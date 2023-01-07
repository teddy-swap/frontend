import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

type DarkModeContext = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkMode = createContext<DarkModeContext>({
  darkMode: true,
  toggleDarkMode: () => null,
});

interface IDarkModeProvider {
  children: ReactNode;
}

const DarkModeProvider = ({ children }: IDarkModeProvider) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);
  return (
    <DarkMode.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export const useDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkMode);
  return { darkMode, toggleDarkMode };
};

export default DarkModeProvider;
