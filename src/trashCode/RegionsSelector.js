import React from 'react'
import './RegionsSelector.css'
import { useState } from 'react'

export default function RegionsSelector(props){
    const [selectedRegion, setSelectedRegion] = useState('')
    const arraySupport = ["",]

    props.regioes.map(item => arraySupport.push([item.nome, item.id]))
    

    const handleSetRegion = event => {
        const found = arraySupport.findIndex(element => element[0] === (event.target.value))
        setSelectedRegion(event.target.value);
        props.onChange(arraySupport[found][1])
    }


    return(
        <select className='regions-selector' value={selectedRegion} onChange={handleSetRegion} >
            <option disabled={true} value=''> Selecione uma Região</option>
            {props.regioes.map((item) => {
                return(<option 
                    key={item.id} 
                    value={item.nome}
                    onClick={() => props.onClick()}
                >{item.nome}</option>)
            })}
        </select>
    )
}