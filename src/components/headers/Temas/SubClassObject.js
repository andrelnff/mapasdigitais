import { useState } from "react";
import React from "react";
import * as AiIcons from 'react-icons/ai'
import './SubClassObject.css'

export default function SubClassObject(props)
{
    const [isSelected, setIsSelected] = useState(false)

    return(<>
        <div className={isSelected ? 'subclass-object active': 'subclass-object'} onClick={() => {setIsSelected(!isSelected)
        if(isSelected === false){
            props.addSubClass(props.id,props.subname,setIsSelected)
        }else{
            props.removeSubClass(props.id, props.subname,setIsSelected)
        }}}>
            <p className="subclass-name">{props.subname}</p>
            <AiIcons.AiOutlineCheck className={ isSelected ? 'icon-v active':' icon-v'}/>
        </div>
    </>)
}