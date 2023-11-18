import React from "react";
import * as AiIcons from 'react-icons/ai'
import './Item.css'

function Item(props){
    const id = props.id
    return(
        <div className="item-component" onClick={() => {props.removeSubClass(id)}}>
            <p className="item-name">{props.name}</p>
            <AiIcons.AiOutlineClose/>
        </div>
    )
}

export default Item