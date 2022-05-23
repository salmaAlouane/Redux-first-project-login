import React from "react";
import {login,logout} from "./feautures/userSlice.js";
import {useDispatch } from 'react-redux'

export default function Login (){
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => dispatch(login({
        email:"louma@gmail.com" ,  
        nom: "selma" ,
        prenom: "alouane" ,
        adresse: "sidi alouane"
      }))}>se connecter</button>

      <button onClick={()=>dispatch(logout())}> logout</button>
        </div>
    )
}