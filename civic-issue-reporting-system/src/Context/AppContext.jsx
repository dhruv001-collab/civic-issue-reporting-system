import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const value = {
        // Add any global state or functions you want to provide here
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}