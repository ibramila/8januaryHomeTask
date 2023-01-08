import React, { createContext, useState } from 'react'

export const MainContext = createContext();

function ContextProvider({ children }) {
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');

    const values = {
        description,
        setDescription,
        name,
        setName,
    }
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider