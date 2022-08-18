import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [currentMode, setCurrentMode] = useState("Dark");

    const toggleMode = () => {
        currentMode==="Dark"? setCurrentMode("Light"):setCurrentMode("Dark");
    }

    return (
        <StateContext.Provider
            value={{
                currentMode,
                toggleMode
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);