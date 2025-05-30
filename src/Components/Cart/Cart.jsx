import './Cart.css';

import { useNavigate } from "react-router-dom";

export default function Cart() {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate('/');
    };

    return (
        <section className="cart">
            <div className="cart-container">
                <h1 className="cart-title">Your Cart</h1>
                <p className="cart-empty-text">Your cart is empty.</p>
                <button className="cart-button" onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
            </div>
        </section>
    );
}
