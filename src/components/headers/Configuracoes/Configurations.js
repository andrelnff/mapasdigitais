import React,{useState, useRef} from "react";
import "./Configurations.css"
import OutSideClick from "../../hooks/OutsideClick";
import * as AiIcons from 'react-icons/ai'
import ConfigurationsData from "./ConfigurationsData";


function Configurations(props){
    const Ref = useRef(null)
    const close = () => {props.setConfigurationsBox(false)}

    OutSideClick(Ref, props.configurationsBox, close)

    return (
        <div ref={Ref}  className={props.configurationsBox ? 'configurations active' : 'configurations'}>
            <h2 className="title-element"> Configurações </h2>

            <span className="btn-close" onClick={() => close()}>
                <AiIcons.AiOutlineClose/>
            </span>
            <div className="list-itens">
            {ConfigurationsData.map((item, index) => {
                return(
                    <div className="element" key={index}>
                        <div className="color-element" style={item.color}></div>
                        <p className="ele-nome">{item.name}</p>
                        
                        <input
                            type='checkbox'
                            checked={props.controlArrayConfig[index]}
                            onChange={() => props.handleSetConfig(index)}
                        />
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Configurations