import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");
    const [status, setStatus] = useState("All");
    const [allproducts, setAllproducts] = useState([])

    
    const value = {
        // Add any global state or functions you want to provide here
        isOpen,
        setIsOpen,
        searchText,
        setSearchText,
        status,
        setStatus,
        allproducts,
        setAllproducts,
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}