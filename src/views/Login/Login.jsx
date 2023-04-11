import React, { useState } from 'react';
import Alert from '../../components/Alert/Alert';
import LoginSection from './LoginSection';
import SignupSection from './SignupSection';
import LoginController from '../../controllers/login/LoginController';
import Button from '../../components/Button/Button';

import "./Login.css"

const Login = () => {
    const [alert, setAlert] = useState({ isPresent: false, message: "", type: "success" });
    const [section, setSection] = useState(0);

    return (
        <main className="login">
            <div className="login-container">
                <div className='login-buttons'>
                    <Button id="login-button" classNames={`login-button ${section === 0 ? 'selected' : 'notSelected'}`} title="Iniciar sesión" onClick={() => {
                        setSection(0);
                    }}/>
                    <Button id="signup-button" classNames={`signup-button ${section === 1 ? 'selected' : 'notSelected'}`} title="Registrarse" onClick={() => {
                        setSection(1)
                    }}/>
                </div>
                {section === 0 ?
                    <LoginSection handleError={(error) => {
                        setAlert({ isPresent: true, message: error.code, type: "warning" })
                    }}/>
                    :
                    <SignupSection  handleAlert={(error) => {
                        setAlert({ isPresent: true, message: error.code, type: "warning" })
                        setTimeout(() => {
                            setAlert({ isPresent: false, message: "" })
                        }, 5000);
                    }} changeSection={() => {
                        setAlert({ isPresent: true, message: "Usuario creado satisfactoriamente.", type: "success" })
                        setSection(0)
                        setTimeout(() => {
                            setAlert({ isPresent: false, message: "" })
                        }, 5000);
                    }}/>
                }
            </div>
            {alert.isPresent ?
                <Alert text={alert.message} type={alert.type} onClick={() => {
                    setAlert(alert.isPresent = false)
                }} />
                :
                null
            }
        </main>
    )
}

export default Login