import { useEffect } from 'react';
import { useState } from 'react';

export const useDarkMode = () => {
    const [useDark, setUseDark] = useState(false);

    useEffect(() => {
        useDark ? document.querySelector('body').classList.add('dark-mode')
        : document.querySelector('body').classList.remove('dark-mode')        
    }, [useDark])

    return [useDark, setUseDark];
}