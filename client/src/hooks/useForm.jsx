import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initial) => {
    const [value, setValue] = useLocalStorage(key, initial);

    const clearForm = e => {
        e.preventDefault();
        setValue(initial);
    }

    const handleChanges = e => {
        e.preventDefault();
        setValue({[e.target.name]: e.target.value})
    }


    return [value, clearForm, handleChanges];
}