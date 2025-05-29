import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import "./Header.css";
import logo from "/logo.png";
import profilePic from "/user.svg";
import basket from "/basket.svg";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
                        <li
                            className="dropdown"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <a href="#">Courses ▼</a>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-column">
                                        <h3>Popular topics</h3>
                                        <a href="#">Python</a>
                                        <a href="#">JavaScript</a>
                                        <a href="#">HTML & CSS</a>
                                        <a href="#">SQL</a>
                                    </div>
                                    <div className="dropdown-column">
                                        <h3>Languages</h3>
                                        <a href="#">Java</a>
                                        <a href="#">C++</a>
                                        <a href="#">C#</a>
                                        <a href="#">PHP</a>
                                    </div>
                                    <div className="dropdown-column">
                                        <h3>Careers</h3>
                                        <a href="#">Full-Stack Engineer</a>
                                        <a href="#">Front-End Engineer</a>
                                        <a href="#">Data Scientist</a>
                                    </div>
                                </div>
                            )}
                        </li>
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
                    <Link to="/registration">
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
