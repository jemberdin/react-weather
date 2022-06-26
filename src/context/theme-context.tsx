import React, { useContext, useState } from 'react';
import { changeCssRootVariables } from '../model/ChangeCssRootVariables';
import { storage } from '../model/Storage';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

interface ThemeProps {
    theme: string;
    changeTheme: (theme: Theme) => void;   
}

interface ProviderProps {
    children: React.ReactNode
}

const ThemeContext = React.createContext<ThemeProps>({
    theme: Theme.LIGHT,
    changeTheme: (theme: Theme) => {},
});

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
    changeCssRootVariables(theme);

    const changeTheme = (theme: Theme) => {
        setTheme(theme);
        storage.setItem('theme', theme);
        changeCssRootVariables(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                changeTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    return useContext(ThemeContext);
};
