import './HomeMain.css';
import '/pc.png';
import 'react';
import {motion} from 'framer-motion';
export default function HomeMain() {
return(
    <div className="home-main">
        <motion.h1 className="home-main-title"
                   initial={{
                       y: 25, opacity: 0,
                   }}
                   animate={{
                       y: 0, opacity: 1,
                   }}
                   transition={{
                       delay: 0.5,
                       duration: 1,
                       ease: "easeInOut",
                   }}
        >LEARN PROGRAMMING WITH US!
        </motion.h1>
        <motion.div
            initial={{
                transform: "translateZ(8px) translateY(-4px)",
            }}
            animate={{
                transform: "translateZ(32px) translateY(-10px)",
            }}
            transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2,
                ease: "easeInOut",
            }}>
            <img className="pc" src={'/pc.png'} alt="pc"/>
        </motion.div>
    </div>
)
}