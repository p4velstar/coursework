import './HomeMain.css';
import 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import pc from '/pc.png';
import heart from '/heart.png';

export default function HomeMain() {
    const navigate = useNavigate();

    return (
        <section className="home-main">
            <div className="home-main-text">
                <motion.h1 className="home-main-title"
                           initial={{ y: 25, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                >
                    Upgrade YOUR skills for better future!
                </motion.h1>
                <motion.p className="home-main-description"
                          initial={{ y: 25, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                >
                    Start your programming journey with us. We offer a wide range of courses for beginners and advanced programmers.
                </motion.p>
                <button className="home-main-button" onClick={() => navigate("/#")}>
                    Get Started
                </button>
            </div>

            <motion.img
                className="home-main-image"
                src={pc}
                alt="3D Computer"
                initial={{ transform: "translateZ(8px) translateY(-4px)" }}
                animate={{ transform: "translateZ(32px) translateY(-10px)" }}
                transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
            />
           {/* <motion.img
            className="home-main-img-heart"
            src={heart}
            alt="Heart"
            initial={{ transform: "translateZ(12px) translateY(-6px)" }}
            animate={{ transform: "translateZ(42px) translateY(-22px)" }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2, ease: "easeInOut" }}
            ></motion.img>*/}
        </section>
    );
}
