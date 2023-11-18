import React, {useEffect, useRef} from "react";
import StreetsData from './StreetsData'
import './Streets.css'
import OutSideClick from "../../hooks/OutsideClick";
import * as AiIcons from 'react-icons/ai'


function Streets(props){
    const Ref = useRef(null)

    OutSideClick(Ref, props.streetsMenu, close)

    function close(){
        props.setStreetsMenu(false)
    }

    

    return(<div ref={Ref} className={props.streetsMenu ? 'streets active' : 'streets'} >
        <h2 className="title-element"> Ruas </h2>

            <span className="btn-close" onClick={() => props.setStreetsMenu(!props.streetsMenu)}>
                <AiIcons.AiOutlineClose/>
            </span>

            <div className="list-itens">
            {StreetsData.map((item, index) => {
                return(
                    <div className="element" key={index}>
                        <div className="color-element" style={item.color}></div>
                        <p className="ele-nome">{item.name}</p>
                        
                        <input
                            type='checkbox'
                            checked={props.controlArrayStreets[index]}
                            onChange={() => props.handleSetStreets(index)}
                        />
                    </div>
                )
            })}
            </div>

    </div>)
}

export default Streets