import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Registration() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/email-confirmation');
    };

    return (
        <section className="registration">
            <div className="registration-container">
                <h1 className="registration-title">Registration</h1>
                <form className="registration-form" onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username" required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />

                    <label htmlFor="role">Role</label>
                    <select id="role" name="role" required>
                        <option value="">Select role</option>
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                    </select>

                    <p className="login-link">
                        Do you have an account? <Link to="/login">Login</Link>
                    </p>

                    <button type="submit" className="registration-button">Register</button>
                </form>
            </div>
        </section>
    );
}
