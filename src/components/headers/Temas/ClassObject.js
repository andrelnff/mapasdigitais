import { useState , useEffect, useRef} from "react";
import React from "react";
import * as AiIcons from 'react-icons/ai'
import SubClassObject from "./SubClassObject";
import './ClassObject.css'
import OutSideClick from "../../hooks/OutsideClick";

export default function ClassObject(props){
    const [isOpen, setIsOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [maxNumPage, setMaxNumPage] = useState(1)
    const [loader, setLoader] = useState(true)
    const [dataLoaded, setDataLoaded] = useState([])
    const Ref = useRef(null)
    
    const close = () => setIsOpen(false)

    OutSideClick(Ref, isOpen, close)

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                getSubClasses()
            }
        });
        intersectionObserver.observe(document.querySelector(`#subclass-loader${props.id}`))
        return () => intersectionObserver.disconnect();
    })

    async function getSubClasses(){
        if(currentPage <= maxNumPage){
            setLoader(true)
            setCurrentPage(currentPage+1)
            setLoader(false)
        }
    }

    


    return(<>
    
        <div ref={Ref} className={isOpen ? 'class-object active': 'class-object'} >
            <div className="object-content" onClick={() => {setIsOpen(!isOpen)}}>
                <p className="name">{props.name}</p>
                <AiIcons.AiOutlineRight className={isOpen ? 'icon active' : 'icon'}/>
            </div>

            
                <div className="childrens-list">
                    {
                        dataLoaded.map((item, index) => {
                            return(<SubClassObject
                                key={`class_${props.id}_sub${index}`}
                                subname={item.name}
                                id={item.id}
                                addSubClass={props.addSubClass}
                                removeSubClass={props.removeSubClass}
                            />)
                        })
                    }

                    <div id={`subclass-loader${props.id}`} className={ loader ? 'loader active' : 'loader deactive'}></div>

                </div>

        </div>
        
        </>)
}