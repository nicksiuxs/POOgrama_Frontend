import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../firebase";

class LoginController {
    static async login(email, password){
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            if (error.code === 'auth/wrong-password') {
                throw new LoginException('Wrong password please try again');
            } else if (error.code === 'auth/user-not-found') {
                throw new LoginException('User not found');
            }
        }
    }

    static async createUser({name, email, password}) {
        const response = await fetch('http://localhost:5000/watchful-audio-293805/us-central1/app/create', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "access-control-allow-credentials": true,
                "access-control-allow-methods": "GET, POST",
                "access-control-allow-origin": "*",
                "crossorigin": true,    
                "mode": 'no-cors',
            },
            body: JSON.stringify({
                name, email, password
            }),
        });
        return response;
    }
}

class LoginException extends Error {
    constructor(code) {
        super();
        this.code = code;
    }
}

export default LoginController;