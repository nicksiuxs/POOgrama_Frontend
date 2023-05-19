import React, { useState } from "react"
import { useNavigate } from 'react-router-dom';
import useAppContext from '../../customHooks/useAppContext';
import Button from '../../components/Button/Button';
import TYPES from '../../reducers/types';
import LoginController from '../../controllers/login/LoginController'

const LoginSection = ({ handleError }) => {

    const [user, setUser] = useState({ email: "", password: "" });

    const navigate = useNavigate();
    const { dispatch } = useAppContext()
    const loginUser = LoginController.login;
    const getUser = LoginController.getUser;

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const userAuth = await loginUser(user.email, user.password);
            if (userAuth) {
                const userInfo = await getUser(userAuth.uid)
                dispatch({ type: TYPES.LOGIN, payload: userInfo });
                navigate("/video", { replace: true })
            }
        } catch (error) {
            handleError(error);
        }
    }

    return (
        <>
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
                <Button title={"Iniciar sesión"} />
            </form>
        </>
    )
}

export default LoginSection