import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import "./Header.css";
import logo from "/logo.png";
import profilePic from "/user.svg";
import basket from "/basket.svg";

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPricesOpen, setIsPricesOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const menuItems = ["Contact Us"];

    return (
        <header className="header">
            <nav className="navbar">
                <div className="container">
                    <a href="#" onClick={() => window.location.reload()}>
                        <img src={logo} alt="logo" className="logo"/>
                    </a>
                    {WindowWidth < 1024 && (
                        <button className="nav-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <Hamburger size={36} color="white"/>
                        </button>
                    )}

                    <ul className={`nav-menu ${isMenuOpen || WindowWidth >= 1024 ? "open" : ""}`}>
                        <li className="dropdown" onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}>
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
                        <li className="dropdown" onMouseEnter={() => setIsPricesOpen(true)}
                            onMouseLeave={() => setIsPricesOpen(false)}>
                            <a href="#">Prices ▼</a>
                            {isPricesOpen && (
                                <div className="dropdown-menu-prices">
                                    <div className="dropdown-column">
                                        <a href="#">For Individuals</a>
                                        <a href="#">For Students</a>
                                        <a href="#">For Business</a>
                                    </div>
                                </div>
                            )}
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} className="contact">
                                <a href="#"
                                   onMouseEnter={() => setHoveredIndex(index)}
                                   onMouseLeave={() => setHoveredIndex(null)}
                                   style={{
                                       fontSize: hoveredIndex === index ? "1.2rem" : "1rem",
                                       transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                                       transition: "all 0.3s",
                                       display: "flex",
                                       alignItems: "center",
                                       justifyContent: "center",
                                   }}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`profile_basket ${isMenuOpen ? 'hide' : ''}`}>
                    <a href="#">
                        <img src={profilePic} alt="profile"/>
                    </a>
                    <a href="#"> <img src={basket} alt="basket"/></a>
                </div>
            </nav>
        </header>
    );
}
