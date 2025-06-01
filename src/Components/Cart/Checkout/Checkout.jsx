import PropTypes from 'prop-types';
import './Checkout.css';

const Checkout = ({ orders, onConfirm }) => {
    const totalPrice = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);

    return (
        <div className="checkout-container">
            <h2>Оформлення замовлення</h2>
            {orders.length === 0 ? (
                <p>Ваш кошик порожній.</p>
            ) : (
                <>
                    <ul className="checkout-list">
                        {orders.map(order => (
                            <li key={order.id} className="checkout-item">
                                <span>{order.title}</span>
                                <span>Кількість: {order.quantity}</span>
                                <span>Ціна: ${(order.price * order.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="checkout-total">
                        <strong>Загальна сума:</strong> ${totalPrice.toFixed(2)}
                    </div>
                    <button className="confirm-btn" onClick={onConfirm}>
                        Підтвердити покупку
                    </button>
                </>
            )}
        </div>
    );
};

Checkout.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            price: PropTypes.number,
            quantity: PropTypes.number
        })
    ).isRequired,
    onConfirm: PropTypes.func.isRequired
};

export default Checkout;
