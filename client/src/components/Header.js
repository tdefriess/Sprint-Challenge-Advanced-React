import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useForm } from '../hooks/useForm';

const initialValue = {
    search: ''
};

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    // const initialValue = {
    //     search: ''
    // };

    const [search, clearForm, handleChanges] = useForm('search form', initialValue);
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <nav>
                <h1>Players of Some Sport or Other</h1>
                <button data-testid='button' onClick={toggleDark}>Toggle Dark Mode</button>
                {/* <form onSubmit={handleSubmit}>
                    <legend>Search by Name:</legend>
                    <input label='Search' value={search} onChange={handleChanges} name='search'></input>
                </form> */}
            </nav>
        </div>
    )
}

export default Header;