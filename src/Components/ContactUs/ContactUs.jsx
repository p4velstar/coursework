import {useState} from "react";
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return <div className="thank-you"> Thank you for contacting us! We will contact you shortly.</div>;
    }

    return (
        <div className="contact-us">
            <h2> contact us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Name"
                    />
                </label>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your email"
                    />
                </label>
                <label>
                    Message:
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Your message"
                    />
                </label>
                <button type="submit">Відправити</button>
            </form>
        </div>
    );
};

export default ContactUs;
