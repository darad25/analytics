"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "cyber-dark" | "night-owl" | "light";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>("cyber-dark");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem("aura-dashboard-theme") as Theme;
            if (savedTheme) {
                setThemeState(savedTheme);
                document.documentElement.setAttribute("data-theme", savedTheme);
            }
        }
    }, []);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem("aura-dashboard-theme", newTheme);
            document.documentElement.setAttribute("data-theme", newTheme);
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    // If context is undefined (e.g. during build-time SSR outside of a provider passthrough),
    // return a default fallback instead of throwing to prevent build crashes.
    if (context === undefined) {
        return {
            theme: "cyber-dark" as Theme,
            setTheme: () => { },
        };
    }
    return context;
}
