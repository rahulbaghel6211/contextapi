import {
  createContext,
  useState,
} from 'react';

export const Auth=createContext();
export const AuthProvider=({children})=>{
    const[isAuth,setIsAuth]=useState(false)
    const[token,setToken]=useState("")
    const toggleAuth=(token)=>{
        if(token){
            setIsAuth(!isAuth)
            setToken(token)
        }
       
    }
    return (<Auth.Provider value={{isAuth,token,toggleAuth}}>
        {children}
    </Auth.Provider>
    );
}