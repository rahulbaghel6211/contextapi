import React, {
  useContext,
  useState,
} from 'react';

import { Auth } from '../content/Auth';

export const Form=()=>{
    const[form,setForm]=useState({})
    const {toggleAuth}=useContext(Auth)
    const  handlechange=(e)=>{
        let{name,value}=e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const postForm = () => {
        fetch("https://reqres.in/api/register", {
            method : "POST",
            body : JSON.stringify(form),
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then((res) =>  {
            if(res.error) {
                alert("user not found")
            }else {
                toggleAuth(res.token)
            }
        })
    }
    return(
    <div>
        <input type="email" name='email' placeholder='email' onChange={(e) => handlechange(e)}/>
        <input type="password" name='password' placeholder='password' onChange={(e) => handlechange(e)}/>
        <button onClick={postForm}>Submit</button>
    </div>
    )
}