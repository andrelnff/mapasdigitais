import {useEffect} from "react";
function OutSideClick(ref, isOpen, closeFunction) {
    useEffect(() => {
        
        function handleClickOutside(event) {
            if(ref.current && !ref.current.contains(event.target) && isOpen === true){
                closeFunction()
            }
        }

        document.addEventListener("click", handleClickOutside);
        return() => {
            document.removeEventListener("click", handleClickOutside)
        };

    }, [ref, isOpen])

}

export default OutSideClick