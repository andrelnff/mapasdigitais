import React from "react";
import * as AiIcons from 'react-icons/ai'
import "./ButtonTemas.css"

export default function ButtonTemas(props){

    return(
        <button className={ props.setTemas? "button-temas":"button-temas active"} onClick={() => props.onClick()}>
            <AiIcons.AiOutlineBulb/>
            <p>Temas</p> 
        </button>
    )
}