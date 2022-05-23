import React from "react";
import { useSelector } from "react-redux";
import {selectValueObject} from "./feautures/userSlice";



export default function Profile () {

    const state = useSelector(selectValueObject);
    
    return (
        <div>
            <h1>Bonjour</h1>
            <p>Email:{state.email}</p>
            <p>nom: {state.nom}</p>
            <p>prenom:{state.prenom}</p>
            <p>adresse:{state.adresse}</p>
        </div>
    )
}