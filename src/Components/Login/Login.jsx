import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Login({ onLogin }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
        navigate("/");
    };

    return (
        <section className="login">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <p className="registration-link">
                        Dont have an account? <Link to="/registration">Register</Link>
                    </p>

                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
            </div>
        </section>
    );
}
Login.propTypes = {
    onLogin: PropTypes.func.isRequired,
};
