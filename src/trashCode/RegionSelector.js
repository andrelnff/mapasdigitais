import React, {useState} from "react";
import "./RegionSelector.css"

export default function RegionSelector(props){
    const [selected , setSelected] = useState('')


    const handleSelect = event => {
        const found = props.labels.findIndex(element => element === (event.target.value))
        props.onChange(found)
        setSelected("")
    }

    return(
        <select 
            className={props.setRegion === null ? "region-selector active" : "region-selector"}
            value={selected} onChange={handleSelect}>
            <option disabled={true} value="" >Selecione uma região</option>
            {props.labels.map((label, index) => {
                return(<option
                    key={"opt"+index}
                    
                >{label}</option>)
            })}
        </select>
    )
}