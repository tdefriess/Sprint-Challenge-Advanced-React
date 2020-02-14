import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <div>
            <nav>
                <h1>Players of Some Sport or Other</h1>
                <button data-testid='button' onClick={toggleDark}>Toggle Dark Mode</button>
            </nav>
        </div>
    )
}

export default Header;