import React from "react";
import * as AiIcons from 'react-icons/ai'
import './ToglleSelect.css'
import { useState, } from 'react';

function ToglleSelect(props){
    const [toglle, setToglle] = useState(false)

    return(
        <>
            <div className={toglle ? 'toglle-menu active' : 'toglle-menu'}>
                <button className={ toglle ? 'btn-toglle active' : 'btn-toglle'} onClick={() => {setToglle(!toglle)
                props.setUndoMenu(false)
                props.setConfigMenu(false)
                props.setThemesMenu(false)
                props.setSearchMenu(false)
                }}>
                    <AiIcons.AiOutlinePlus/>
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 0}}
                onClick={() => {props.setUndoMenu(!props.undoMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineUndo />
        
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 1}} onClick={() => {props.setConfigMenu(!props.configMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineSetting />
           
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 2}} onClick={() => {props.setThemesMenu(!props.themesMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineBulb />
  
                </button>

                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 3}} onClick={() => {props.setSearchMenu(!props.searchMenu)
                setToglle(false)}}>
                    <AiIcons.AiOutlineSearch />
    
                </button>
                
                <button className={toglle ?  'btn-opt active' : 'btn-opt'} style={{"--value": 4}}>
                    <AiIcons.AiOutlineEnvironment />
     
                </button>

                

                


            </div>
        </>
    )
}

export default ToglleSelect
