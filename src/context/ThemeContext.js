import {createContext} from 'react';

export const ThemeContext = createContext({
    theme: ""
});

function ThemeContextProvder(props) {
    const [theme, setTheme] = useState('light');
    
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return <ThemeContext.Provider value={theme}>
        {props.children}
    </ThemeContext.Provider>
}
