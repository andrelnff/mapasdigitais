import React, {useRef} from "react";
import './Undo.css'
import * as AiIcons from 'react-icons/ai'
import OutSideClick from "../../hooks/OutsideClick";

function Undo(props){
    const Ref = useRef(null)

    OutSideClick(Ref, props.undoMenu, close)

    function close(){
        props.setUndoMenu(false)
    }

    function undoAll(){
        props.setFullData([])
        props.setControlArrayStreets([true,true,true,true,false,false])
        props.setControlArrayConfig([false,false])
        if(props.themesClear !== false){props.themesClear()}
        if(props.searchClear !== false){props.searchClear()}
    }


    return(
    <div ref={Ref} className={props.undoMenu ? 'undo-pop-up active' : 'undo-pop-up'}>
        <p className="info">Deseja defaszer tudo? E voltar as configuraçôes padrão?</p>

        <span>
            <button className="button confirm" 
            onClick={() => {props.setUndoMenu(false)
            undoAll()}}>
                <AiIcons.AiOutlineCheck/>
            </button>
            <button className="button refuse" onClick={() => close()}>
                <AiIcons.AiOutlineClose/>
            </button>
        </span>
    </div>)

}

export default Undo