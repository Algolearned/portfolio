// ViewModel: Exposes theme state and toggle to Views
import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";

export const useTheme = () => {
    const { isDark, toggle, setDark } = useThemeStore();

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);
    }, [isDark]);

    return { isDark, toggle, setDark };
};