import React from "react";
import { useState } from "react";
import "./ItemSearch.css"

function ItemSearch(props){
    const [active, setActive] = useState(false)
    return(
        <div className={active ? 'item-search active' : 'item-search'} onClick={() => {
            setActive(!active)
            if(active === false) {
                props.selectItem(props.element)
                props.setSearchMenu(false)
            }else{
                props.unSelectItem()
            }
            
        }}>
            <img className="item-icon-found" style={{'--MainColor':props.element.color}} src={props.element.icon}/>
            <p className="item-name-found">{props.element.name}</p>
            <div className="item-sclass-found" style={{'--MainColor':props.element.color}}  >{props.element.subName}</div>
        </div>
    )
}

export default ItemSearch