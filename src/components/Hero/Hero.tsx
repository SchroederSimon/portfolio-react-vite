import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import '../../components/Hero/Hero.css'


function Hero() {
    return (
        <div className="heroContainer">
            <div className="navbarContainer">
                <ul className="navbarLinks">
                    <li>
                        <Link offset={-100} smooth spy to="home">
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link offset={-100} smooth spy to="projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link offset={-100} smooth spy to="skills">
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link offset={-100} smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="heroContentContainer">
                <div className="heroleft">
                    <h2>FRONT-END</h2>
                    <h2><span>DEVELOPER</span></h2>
                    <p>With a passion for design</p>
                </div>
                <div className="heroRight">
                    <h2>SIMON SCHROEDER</h2>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}
                    >
                        <a href="https://www.w3schools.com" target="_blank">RESUME</a>
                    </motion.button>
                </div>
            </div>
        </div>

    )
}

export default Hero
