import { createContext, useState } from "react";

// 필요한 데이터를 가지고 있는다
export const DarkModeContext = createContext();

// Provider를 항상 만들어야 한다.
export function DardModeProvider({children}){

    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return(
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}