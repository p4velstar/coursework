import PropTypes from 'prop-types';
import './Cart.css';
import { useNavigate } from "react-router-dom";

export default function Cart({ orders }) {
    const navigate = useNavigate();

    const handleContinueShopping = () => {
        navigate("/checkout");
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
    const totalPrice = orders.reduce(
        (acc, order) => acc + order.price * order.quantity,
        0
    );

    return (
        <section className="cart">
            <div className="cart-container">
                <h1 className="cart-title">Your Cart</h1>
                <ul className="cart-list">
                    {orders.map((order) => (
                        <li key={order.id} className="cart-item">
                            <img src={order.image} alt={order.title} className="cart-item-image"/>
                            <span className="cart-item-title">{order.title}</span>
                            <span>Price: ${(order.price * order.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                </ul>

                <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
                <div className="cart-actions">
                    <button className="cart-button" onClick={handleContinueShopping}>
                        Continue Shopping
                    </button>
                </div>
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