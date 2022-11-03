import { createContext, useCallback, useState } from 'react';

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const add = useCallback((item) => {
        setFavorites([...favorites, item.id]);
    }, [favorites]);

    const remove = useCallback((item) => {
        const filtered = favorites.filter((id) => id !== item.id);
        setFavorites(filtered);
    }, [favorites]);

    return (
        <AppContext.Provider value={{ favorites, add, remove }}>
            { children }
        </AppContext.Provider>
    );
}