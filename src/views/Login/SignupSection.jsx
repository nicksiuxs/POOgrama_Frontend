import React, { useState } from "react"
import Button from "../../components/Button/Button";
import LoginController from "../../controllers/login/LoginController";

const SignupSection = ({ handleAlert, changeSection }) => {

    const [user, setUser] = useState({ name: "", email: "", password: "", password2: ""});

    const createUser = LoginController.createUser;

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        
        
        try {
            if(user.name === '' || user.email === '' || user.password === '' || user.password2 === ''){
                handleAlert({code: "Por favor completa todos los campos"});
            } else if (user.password !== user.password2){
                handleAlert({code: "Las contraseñas no coinciden"});
            } else {
                let response = await createUser(user);
                if(response.status === 204){
                    changeSection();
                } else if(response.status === 500) {
                    let res = await response.json();
                    handleAlert({code: res.msg});
                }
            }
        } catch (error) {
            handleAlert(error);
        }
    }

    return(
        <>
            <h1>Registrarse</h1>
            <form className="login-form" onSubmit={handleOnSubmit}>
                <div className="input">
                    <label>*Nombre</label>
                    <input type="text" name="name" value={user.name} onChange={handleOnChange} />
                </div>
                <div className="input">
                    <label>*Correo electrónico</label>
                    <input type="text" name="email" value={user.email} onChange={handleOnChange} />
                </div>
                <div className="input">
                    <label>*Contraseña</label>
                    <input type="password" name="password" value={user.password} onChange={handleOnChange} />
                </div>
                <div className="input">
                    <label>*Verificar contraseña</label>
                    <input type="password" name="password2" value={user.password2} onChange={handleOnChange} />
                </div>
                <Button title={"Registrarse"} />
            </form>
        </>
    )
}

export default SignupSection;