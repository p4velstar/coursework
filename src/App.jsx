import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import HomeMain from "./Components/HomeMain/HomeMain.jsx";
import Header from "./Components/Header/Header.jsx";
import Registration from "./Components/Registration/Registration.jsx";
import Login from "./Components/Login/Login.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import CourseDetail from "./Components/Courses/CourseDetail/CourseDetail.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Checkout from "./Components/Cart/Checkout/Checkout.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";
import EmailConfirmation from "./Components/EmailConfirmation/EmainConfirmation.jsx";

export default function App() {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });
    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);
    const handleLogin = (username) => {
        setUser({ username });
    };
    const handleLogout = () => {
        setUser(null);
        setOrders([]);
        localStorage.removeItem("orders");
    };
    const [orders, setOrders] = useState(() => {
        const savedOrders = localStorage.getItem("orders");
        return savedOrders ? JSON.parse(savedOrders) : [];
    });
    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);
    const handleChangeQuantity = (_id, _delta, clear = false) => {
        if (clear) {
            setOrders([]);
        }
    };

    const courses = [
        {
            id: 1,
            title: "Introduction to Programming",
            description: "Learn the basics of programming with Python. No prior experience required.",
            price: 48.99,
            image: "/images/introduction.png"
        },
        {
            id: 2,
            title: "Web Development Bootcamp",
            description: "Become a full-stack web developer with this comprehensive bootcamp.",
            price: 39.99,
            image: "/images/WebDevelop.png"
        },
        {
            id: 3,
            title: "Data Science and Machine Learning",
            description: "Dive into data science and machine learning with hands-on projects.",
            price: 78.99,
            image: "/images/DataScience.png"
        },
        {
            id: 4,
            title: "Mobile App Development",
            description: "Create your own mobile apps for Android and iOS using React Native.",
            price: 89.99,
            image: "/images/Mobileappdevelopment.jpg"
        },
        {
            id: 5,
            title: "Game Development with Unity",
            description: "Learn how to create games using Unity, one of the most popular game engines.",
            price: 59.99,
            image: "/images/GameDevelopUnity.jpg"
        }
    ];

    const handleAddToCart = (course) => {
        setOrders((prevOrders) => {
            const exists = prevOrders.some((o) => o.id === course.id);
            if (exists) {
                return prevOrders;
            }
            return [...prevOrders, { ...course, quantity: 1 }];
        });
    };

    return (
        <BrowserRouter>
            <Header user={user} onLogout={handleLogout} orders={orders} />
            <main style={{ paddingTop: "80px" }}>
                <Routes>
                    <Route path="/" element={<HomeMain />} />
                    <Route
                        path="/login"
                        element={<Login onLogin={handleLogin} />}
                    />
                    <Route path="/registration" element={<Registration />} />
                    <Route
                        path="/courses"
                        element={<Courses onAdd={handleAddToCart} courses={courses} />}
                    />
                    <Route
                        path="/cart"
                        element={
                            <Cart orders={orders} onChangeQuantity={handleChangeQuantity} />
                        }
                    />
                    <Route
                        path="/course/:courseId"
                        element={<CourseDetail courses={courses} />}
                    />
                    <Route
                        path="/profile"
                        element={
                            user ? (
                                <Profile user={user} onLogout={handleLogout} onUpdateUser={setUser} />
                            ) : (
                                <Navigate to="/login" replace />
                            )
                        }
                    />
                    <Route
                        path="/checkout"
                        element={<Checkout orders={orders} onConfirm={() => {
                            setUser(prev => ({ ...prev, purchasedCourses: orders }));
                            setOrders([]);
                        }} />}
                    />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/email-confirmation" element={<EmailConfirmation />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}
