import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.css";
import logo from "/logo.png";
import profilePic from "/user.svg";
import basket from "/basket.svg";

export default function Header() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const menuItems = ["Contact Us"];

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo" />
                    </Link>

                    {windowWidth < 1024 && (
                        <button
                            className="nav-menu-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <Hamburger size={36} color="white" toggled={isMenuOpen} />
                        </button>
                    )}

                    <ul className={`nav-menu ${isMenuOpen || windowWidth >= 1024 ? "open" : ""}`}>
                            <Link to={"/"} className="courses">Courses</Link>
                        {menuItems.map((item, index) => (
                            <li key={index} className="contact">
                                <a
                                    href="#"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`nav-hover-link ${hoveredIndex === index ? "hovered" : ""}`}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={`profile_basket ${isMenuOpen ? "hide" : ""}`}>
                    <Link to="/login" className="header-login-link">Login</Link>
                    <Link to="/registration" className="header-registration-link">Registration</Link>
                    <Link to="/">
                        <img src={profilePic} alt="profile" />
                    </Link>
                    <Link to="/cart">
                        <img src={basket} alt="basket" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
