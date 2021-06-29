import { useRef } from "react";
import { Link } from "react-router-dom"
import "./login.css"

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();


    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input type="text" className="loginInput" placeholder="Enter your Username..."
                ref={userRef}
                />
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter your Password..."
                ref={passwordRef}
                />
                <button className="loginButton" type="submit">Login</button>
            </form>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Register</Link>
                </button>
        </div>
    )
}
