import React, {useState} from 'react';


function CadastroPage() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            email: email,
            password: password
        };

        console.log(userData);
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="label-form">
                    <h1>Cadastre-se</h1>
                    <p>Informe os seus dados para cadastro nos campos abaixo.</p>
                </div>
                <div className="input-group">
                    <label className="login-label">Nome de usuário:</label>
                    <input className="field-input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className="login-label">Email:</label>
                    <input className="field-input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-group">
                    <label className="login-label">Senha:</label>
                    <input className="field-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="botao-entrar" type="submit">Cadastrar</button>
            </form>
        </div>
    );
}

export default CadastroPage;