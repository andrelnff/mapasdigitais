import React,{useState, useRef} from "react";
import './RegionSelect.css'
import * as AiIcons from 'react-icons/ai'
import OutSideClick from "../hooks/OutsideClick";


function RegionSelect(props) {
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)
    
    const close = () => {setIsOpen(false)}

    OutSideClick(Ref, isOpen, close)

    const handleSetRegion = (e) => {
        props.onChange(e)
        setIsOpen(false)
    }


    return(
        <div className={props.setRegion === null ? "region-select active" : "region-select"}
            >
            <div className={isOpen ? "region-select-header active" : "region-select-header"}
                onClick={() => setIsOpen(!isOpen)}>
                
                <span><AiIcons.AiOutlineDown/></span>
                <p>Selecione uma região</p>
            </div>
            <div ref={Ref} className={ isOpen ? "region-select-body active" : "region-select-body"}>

            {props.labels.map((label, index) => {
                return(<span key={index} onClick={() => handleSetRegion(index)}>
                    <p>{label}</p>
                </span>)
            })}

            </div>

        </div>
    )

}

export default RegionSelect