import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import '../../components/Hero/Hero.css'


function Hero() {

    const containerLeft = {
        hidden: { y: 20, opacity: 0, scale: 0 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: 1.8,
                ease: [0, 0.71, 0.2, 1],
                duration: 1.5,
            }
        }
    };

    const containerRight = {
        hidden: { y: 20, opacity: 0, scale: 0 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                delay: 2.3,
                ease: [0, 0.71, 0.2, 1],
                duration: 1.5
            }
        }
    };

    return (
        <div className="heroContainer">
            <div className="navbarContainer" >
                <motion.ul className="navbarLinks"
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1 }}>
                    <li>
                        <Link className="linkTo" href="#home" offset={-100} smooth spy to="home" >
                            HOME
                        </Link>
                    </li>
                    <li>
                        <Link className="linkTo" href="#projects" offset={-100} smooth spy to="projects">
                            PROJECTS
                        </Link>
                    </li>
                    <li>
                        <Link className="linkTo" href="#skills" offset={-100} smooth spy to="skills">
                            SKILLS
                        </Link>
                    </li>
                    <li>
                        <Link className="linkTo" href="#about" offset={-100} smooth spy to="about">
                            ABOUT
                        </Link>
                    </li>
                </motion.ul>
            </div>
            <motion.div className="heroContentContainer">
                <motion.div className="heroleft"
                    variants={containerLeft}
                    initial="hidden"
                    animate="visible">
                    <h2>FRONT-END</h2>
                    <h2><span>DEVELOPER</span></h2>
                    <p>With a passion for design</p>
                </motion.div>
                <motion.div className="heroRight"
                    variants={containerRight}
                    initial="hidden"
                    animate="visible"
                >
                    <h2>SIMON SCHROEDER</h2>
                    <motion.button
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}>
                        <a href="src/assets/imagenes/Schroeder-Simon-CV.pdf" target="_blank">RESUME</a>
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>

    )
}

export default Hero
