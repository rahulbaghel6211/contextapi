import { createContext } from 'react';

export const LangContext= createContext();
export const LangProvider=()=>{

    return <Lang.Provider value={"en"}>{children}</Lang.Provider>
}