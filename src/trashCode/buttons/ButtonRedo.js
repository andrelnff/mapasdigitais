import React from "react";
import * as AiIcons from 'react-icons/ai'
import "./ButtonRedo.css"

export default function ButtonRedo(props){

    return(
        <button className={ props.setRegion === null? "button-redo":"button-redo active"} onClick={() => props.onClick()}>
            <AiIcons.AiOutlineArrowLeft/>
        </button>
    )
}