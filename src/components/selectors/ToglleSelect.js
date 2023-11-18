import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as BiIcons from 'react-icons/bi'
import * as TbIcons from 'react-icons/tb'

import './ToglleSelect.css'
import { useState, useRef} from 'react';
import OutSideClick from "../hooks/OutsideClick";

function ToglleSelect(props){
    const [toglle, setToglle] = useState(false)
    const Ref = useRef(null)
    const close = () => {
        setToglle(false)
        props.setUndoMenu(false)
        props.setStreetsMenu(false)
        props.setThemesMenu(false)
        props.setSearchMenu(false)
    }

    OutSideClick(Ref, toglle, close)

    return(
        <>
            <div ref={Ref} className={toglle ? 'toglle-menu active' : 'toglle-menu'} >
                <span className={ toglle ? 'btn-toglle active' : 'btn-toglle'} onClick={() => {setToglle(!toglle)
                props.setUndoMenu(false)
                props.setStreetsMenu(false)
                props.setThemesMenu(false)
                props.setSearchMenu(false)
                }}>
                    <AiIcons.AiOutlinePlus/>
                    <p>Ferramentas</p>
                </span>

                <span className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 1}} onClick={() => {props.setSearchMenu(!props.searchMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineSearch />
                    <p>Buscar</p>
                </span>

                <span className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 2}} onClick={() => {props.setStreetsMenu(!props.streetsMenu)
                setToglle(false)}}>
                    <TbIcons.TbRoad/>
                    <p>Ruas</p>
                </span>

                <span className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 3}} onClick={() => {props.setThemesMenu(!props.themesMenu)
                setToglle(false)}}>
                    <BiIcons.BiBrushAlt />
                    <p>Temas</p>
                </span>

                
                
                <span className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 4}}
                onClick={() => {props.setUndoMenu(!props.undoMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineUndo />
                    <p>Desfazer Tudo</p>
                </span>

            </div>
        </>
    )
}

export default ToglleSelect
