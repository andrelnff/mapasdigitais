import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

import './LoginPage.css';
import {AuthContext} from "../../context/AuthContext";

function LoginPage() {
    const [error, setError] = useState(false);
    const [showError, setShowError] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext)

    useEffect(() => setError(false), [username]);
    useEffect(() => setError(false), [password]);

    const handleSubmit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({type:"LOGIN", payload:user})
                navigate('/wsmaps');
            })
            .catch((error) => {
                setError(true);
                const errorMessage = error.message;
                console.log(error)
                console.error('Erro ao fazer login:', errorMessage);
            });

        if (error) {
            setShowError(true);
            setTimeout(() => setShowError(false));
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="label-form">
                    <h1>Login</h1>
                    <p>Digite os seus dados de acesso nos campos abaixo.</p>
                </div>
                <div className="input-group">
                    <label className="login-label">Nome de usuário:</label>
                    <input className="field-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className="login-label">Senha:</label>
                    <input className="field-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {error && <span key={Date.now()}  className="fade-out">Email ou senha incorretas!</span>}
                <button className="botao-entrar" type="submit">Entrar</button>
                <div className="box-sign">
                    Ainda não possui cadastro? <a href="/cadastro">Clique aqui</a>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;