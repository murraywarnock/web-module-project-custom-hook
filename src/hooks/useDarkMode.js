import useLocalStorage from "./useLocalStorage";

const useDarkMode = (isDark) =>{
    const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', isDark);
    return [isDarkMode, setIsDarkMode];
};

export default useDarkMode;