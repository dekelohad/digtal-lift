import { createContext, useContext, useReducer, useEffect, startTransition } from 'react';

const ThemeContext = createContext();

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { isDarkMode: !state.isDarkMode };
        default:
            return state;
    }
};

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        isDarkMode: localStorage.getItem('theme') === 'dark'
    });

    useEffect(() => {
        document.body.className = state.isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
    }, [state.isDarkMode]);

    const toggleTheme = () => {
        startTransition(() => {
            dispatch({ type: 'TOGGLE_THEME' });
        });
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode: state.isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 