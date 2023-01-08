import React, { createContext, useState } from 'react'

export const MainContext = createContext();

function ContextProvider({ children }) {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const values = {
        message,
        setMessage,
        email,
        setEmail,
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