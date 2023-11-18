import React, {useContext, useState, useEffect, useRef} from 'react';
import './UsuarioMenuDropdown.css';
import {AuthContext} from "../../context/AuthContext";

function UsuarioMenuDropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { dispatch } = useContext(AuthContext);
    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        setIsOpen(false);
    };

    return (
        <div className="dropdown" ref={ref}>
            <button className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                M
            </button>
            {isOpen && (
                <div className="dropdown-content show">
                    <a href="#">Meu Perfil</a>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            )}
        </div>
    );
}

export default UsuarioMenuDropdown;
