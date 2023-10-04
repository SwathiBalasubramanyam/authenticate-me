import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect } from "react-router-dom";

const LoginFormPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    

    if (sessionUser) return <Redirect to="/"/>;
    
    const handleLogin = async(e) => {
        e.preventDefault();
        setErrors([]);
        try {
            await dispatch(login(email, password))
            return (
                <>Login successfull</>
            )
        } catch (error) {

            console.log("something went wrong in handle login", error);
        }
    }

    return (
        <form onSubmit={handleLogin}>
            <ul>
                {errors.map(error => <li key={error}>error</li>)}
            </ul>
            <label>Email
                <input type="text" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
            </label>
            <br></br>
            <label> Password
                <input type="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
            </label>
            <br></br>
            <button type="submit">Log In</button>
        </form>
    )
}

export default LoginFormPage;