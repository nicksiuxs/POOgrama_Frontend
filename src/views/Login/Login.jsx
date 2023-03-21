import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';

import "./Login.css"

const Login = () => {
    const navigate = useNavigate();

    return (
        <main className='login'>
            <section className="login-title">
                <h1>Iniciar sesión como: </h1>
            </section>
            <section className="login-buttons">
                <Button title="Estudiante" onClick={() => navigate("/login/estudiante")} />
                <Button title="Profesor" onClick={() => navigate("/login/profesor")} />
            </section>
        </main>
    )
}

export default Login