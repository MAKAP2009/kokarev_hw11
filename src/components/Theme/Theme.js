import React, { useState } from 'react';
import { MyContext } from '../../context/MyContext';

const Theme = ({ children }) => {

    const [isLightTheme, setIsLightTheme] = useState(true);    
    const ThemeColor = isLightTheme ? 'dark' : 'light';
    const toggleTheme = () => setIsLightTheme(!isLightTheme);

    const theme = {
        isLightTheme,
        ThemeColor,
        toggleTheme        
    }

    return (
        <MyContext.Provider value={theme}>
            { children }
        </MyContext.Provider>
    );
};

export default Theme;