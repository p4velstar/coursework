import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <section className="login">
            <div className="login-container">
                <h1 className="login-title">Login</h1>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <p className="registration-link">
                        Dont have an account? <Link to="/registration">Register</Link>
                    </p>

                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </section>
    );
}
