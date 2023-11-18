import React from "react";
import { OverlayView } from "@react-google-maps/api";
import { useState} from  'react'
import './ThemesDrawer.css'

function ThemesDrawer(props){
    const [isOpen, setIsOpen] = useState(false)
    let name = props.element.name
    let subName = props.element.subName

    if(name === ''){
        name = 'Sem Nome'
    }

    function handleClick(){
        setIsOpen(!isOpen)
    }

    return(<>
        <OverlayView position={props.element.coord} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
        <>
            <div 
            style={{'--MainColor':props.element.color}} 
            className={isOpen ? 'marker active' : 'marker'}
            onClick={() => handleClick()}
            >
                <img className="img-icon" src={props.element.icon}/>

                        <p className={isOpen ? 'eleName active' : 'eleName'}>{name}</p>
                        <br/>
                        <p className={isOpen ? 'subName active' : 'subName'}>{subName}</p>

            </div>
        </>    
        </OverlayView>

    </>)

}




export default ThemesDrawer