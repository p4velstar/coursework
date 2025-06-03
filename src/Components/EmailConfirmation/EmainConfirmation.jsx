import './EmailConfirmation.css';

export default function EmailConfirmation() {
    return (
        <section className="email-confirmation">
            <div className="email-confirmation-container">
                <h1 className="email-confirmation-title">Confirm Your Email</h1>
                <form className="email-confirmation-form">
                    <label htmlFor="code">Enter the code sent to your email:</label>
                    <input type="text" id="code" name="code" required />
                    <button type="submit" className="confirmation-button">Confirm</button>
                </form>
            </div>
        </section>
    );
}
