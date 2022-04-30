import React, { useContext } from 'react';

import { Auth } from '../content/Auth';

export const Sugeste=()=>{
    const {token,isAuth}=useContext(Auth)
    return(
        <div>
            user Status:{isAuth&&token ? "Success":"Failed"}
            <p>Token:{token ? token:"NONE"}</p>
        </div>
    )
}