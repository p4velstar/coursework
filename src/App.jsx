import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HomeMain from "./Components/HomeMain/HomeMain.jsx";
import Header from "./Components/Header/Header.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Login from "./Components/Login/Login.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import Cart from "./Components/Cart/Cart.jsx";

export default function App() {
    const [orders, setOrders] = useState([]);

    const handleAddToCart = (course) => {
        setOrders((prevOrders) => {
            const existingOrder = prevOrders.find((o) => o.id === course.id);
            if (existingOrder) {
                return prevOrders.map((o) =>
                    o.id === course.id ? { ...o, quantity: o.quantity + 1 } : o
                );
            } else {
                return [...prevOrders, { ...course, quantity: 1 }];
            }
        });
    };
    const handleChangeQuantity = (id, delta) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.id === id
                    ? { ...order, quantity: Math.max(order.quantity + delta, 1) }
                    : order
            )
        );
    };

    return (
        <BrowserRouter>
            <Header />
            <main style={{ paddingTop: "80px" }}>
                <Routes>
                    <Route path="/" element={<HomeMain />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                    <Route
                        path="/courses"
                        element={<Courses onAdd={handleAddToCart} />}
                    />
                    <Route path="/cart"
                           element={<Cart orders={orders} onChangeQuantity={handleChangeQuantity} />}
                    />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
