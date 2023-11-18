import React from "react";
import './SelectedItens.css'
import { useState, useEffect, useRef } from 'react'
import * as AiIcons from 'react-icons/ai'
import Item from "./Item";
import OutSideClick from "../../hooks/OutsideClick";

function SelectedItens(props){
    const [isOpen, setIsOpen] = useState(false)
    const [NumThemes, setNumThemes] = useState(22)
    const [show, setShow] = useState(false)
    const Ref = useRef(null)

    const close = () => setIsOpen(false)

    OutSideClick(Ref, isOpen, close)

    useEffect(() => {
        if(props.arrayOfSubClasses.length > 0){
            setNumThemes(props.arrayOfSubClasses.length)
            setShow(true)

        }else{
            setNumThemes(0)
            setShow(false)
        }
    },[props.arrayOfSubClasses])

    return(<>
        <div ref={Ref} className={isOpen ? 'box-itens active' : 'box-itens'} >
            <div className="component" onClick={() => {setIsOpen(!isOpen)}}> 
                <p>{NumThemes} </p>
                <p> Selecionados </p>
            </div>
            <div className="button-clear" onClick={() => props.clearAll()}>
                <p>Limpar</p><AiIcons.AiOutlineClear/>
            </div>
            <div className="itens">

                { show ? (<>{
                    props.arrayOfSubClasses.map((item, index) => {
                        return(<Item 
                            key={`item_set${index}`}
                            name={props.arrayOfSCNames[index]}
                            id={item}
                            removeSubClass={props.removeSubClass}
                        />)
                    })
                }</>):(<>
                    <div className="alert">Você ainda não escolheu os temas.</div>
                </>)}

            </div>
            
        </div>
    </>)
} 
export default SelectedItens