import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import useAppContext from '../../customHooks/useAppContext';
import TYPES from '../../reducers/types';
import "./LoginStudent.css"

const LoginStudent = () => {

    const [user, setUser] = useState({ email: "", password: "" });
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

    return (
        <main className="login-student">
            <h1>Iniciar sesión como estudiante</h1>
            <form className="login-form" onSubmit={handleOnSubmit}>
                <div className="input">
                    <label>Correo electrónico</label>
                    <input type="text" name="email" value={user.email} onChange={handleOnChange} />
                </div>
                <div className="input">
                    <label>Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={handleOnChange} />
                </div>
                <Button title={"Iniciar sesión"} />
            </form>
        </main>
    )
}

export default LoginStudent