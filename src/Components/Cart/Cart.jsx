import PropTypes from 'prop-types';
import './Cart.css';
import { useNavigate } from "react-router-dom";

export default function Cart({ orders, onChangeQuantity }) {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate("/");
    };

    if (orders.length === 0) {
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

    return (
        <section className="cart">
            <div className="cart-container">
                <h1 className="cart-title">Your Cart</h1>
                <ul className="cart-list">
                    {orders.map((order) => (
                        <li key={order.id} className="cart-item">
                            <img src={order.image} alt={order.title} className="cart-item-image"/>
                            <span className="cart-item-title">{order.title}</span>

                            <div className="cart-item-details">
                                <span>Quantity:</span>
                                <button onClick={() => onChangeQuantity(order.id, -1)}>-</button>
                                <span style={{margin: "0 10px"}}>{order.quantity}</span>
                                <button onClick={() => onChangeQuantity(order.id, 1)}>+</button>
                            </div>

                            <span>Price: ${(order.price * order.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>

                <button className="cart-button" onClick={handleContinueShopping}>
                    Continue Shopping
                </button>
            </div>
        </section>
    );
}
Cart.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            quantity: PropTypes.number.isRequired,
            price: PropTypes.number.isRequired,
            image: PropTypes.string,
        })
    ).isRequired,
    onChangeQuantity: PropTypes.func.isRequired,
};