import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
    isDark: boolean;
    toggle: () => void;
    setDark: (isDark: boolean) => void;
}

export const useThemeStore = create<ThemeState>()(
    persist(
        (set) => ({
            isDark: true,
            toggle: () =>
                set((state) => {
                    const next = !state.isDark;
                    document.documentElement.classList.toggle("dark", next);
                    return { isDark: next };
                }),
            setDark: (isDark: boolean) => {
                document.documentElement.classList.toggle("dark", isDark);
                set({ isDark });
            },
        }),
        { name: "portfolio-theme" }
    )
);