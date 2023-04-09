import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useAppContext from '../../customHooks/useAppContext';
import LoginController from '../../controllers/login/LoginController';
import TYPES from '../../reducers/types';

import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';

import "./Login.css"

const Login = () => {
    const [user, setUser] = useState({ email: "", password: "" });
    const [error, setError] = useState({ isPresent: false, message: "" });
    const { dispatch } = useAppContext()

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        dispatch({ type: TYPES.LOGIN, payload: user });
        navigate("/nivel/1")
    }

    const loginUser = LoginController.login;

    return (
        <main className="login">
            <h1>Iniciar sesión</h1>
            <form className="login-form" onSubmit={handleOnSubmit}>
                <div className="input">
                    <label>Correo electrónico</label>
                    <input type="text" name="email" value={user.email} onChange={handleOnChange} />
                </div>
                <div className="input">
                    <label>Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={handleOnChange} />
                </div>
                <Button title={"Iniciar sesión"} onClick={async () => {
                    try {
                        const userAuth = await loginUser(user.email, user.password);
                        if (userAuth !== null) {
                            console.log(userAuth);
                        }
                    } catch (error) {
                        setError({ isPresent: true, message: error.code })
                    }
                }} />
            </form>

            {error.isPresent ?
                <Alert text={error.message} onClick={() => {
                    setError(error.isPresent = false)
                }} />
                :
                null
            }
        </main>
    )
}

export default Login