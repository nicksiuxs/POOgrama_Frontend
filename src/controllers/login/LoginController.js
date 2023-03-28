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
}

class LoginException extends Error {
    constructor(code) {
        super();
        this.code = code;
    }
}

export default LoginController;