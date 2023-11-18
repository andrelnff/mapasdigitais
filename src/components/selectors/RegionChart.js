import React, {useState, useRef} from "react";
import './RegionChart.css'
import * as AiIcons from 'react-icons/ai'
import OutSideClick from "../hooks/OutsideClick";

function RegionChart(props) {
    const [isOpen, setIsOpen] = useState(false)
    const Ref = useRef(null)

    const close = () => {setIsOpen(false)}

    OutSideClick(Ref, isOpen, close)

    function handleSetChart(index){
        let newArray = [...props.controlChart];
        newArray[index] = !props.controlChart[index];
        props.setControlChart(newArray)
    }

    return <div className="region-chart">
        <div className={isOpen ? 'region-chart-header active' : 'region-chart-header'} onClick={() => setIsOpen(!isOpen)}>
            <span><AiIcons.AiOutlineDown/></span>
            <p>Escolha regiões</p>
        </div>

        <div ref={Ref} className={isOpen ? "region-chart-body active" : "region-chart-body"}>
            {props.data.map((item, index) => {
                return(<span key={index}>
                    <p>{item.label}</p>
                    <input
                        type='checkbox'
                        checked={props.controlChart[index]}
                        onChange={() => handleSetChart(index)}
                    />
                </span>)
            })}
        </div>
    </div>
}

export default RegionChart