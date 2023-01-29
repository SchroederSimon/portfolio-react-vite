import { motion } from 'framer-motion'
import '../../components/Hero/Hero.css'


function Hero() {

    return (
        <div className="heroContainer">
            <div className="heroContentContainer">
                <div className="heroleft">
                    <h2>FRONT-END</h2>
                    <h2><span>DEVELOPER</span></h2>
                    <p>With a passion for design</p>
                </div>
                <div className="heroRight">
                    <h2>SIMON SCHROEDER</h2>
                    <ul className="heroLinks">
                        <li><a>Home</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Skills</a></li>
                        <li><a>About Me</a></li>
                    </ul>
                </div>
            </div>
            <motion.button
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 8 }}
            >
                <a href="https://www.w3schools.com" target="_blank">RESUME</a>
            </motion.button>
        </div>
    )
}

export default Hero
