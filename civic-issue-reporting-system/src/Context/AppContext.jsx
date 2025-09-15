import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const value = {
        isOpen,
        setIsOpen,
        // Add any global state or functions you want to provide here
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}