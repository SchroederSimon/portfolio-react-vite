import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import '../../components/About/About.css'
import useIsVisibleOnScreen from '../../hooks/scrollHook';

function About() {

    //Scroll animation
    const myRef = useRef(null);
    const [isVisible] = useIsVisibleOnScreen(myRef);
    
    return (
        <motion.div className="aboutContainer"
        ref={myRef}
        animate={{ opacity: isVisible ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 4 }}
        >
            <div className="aboutText">
                <h1>About Me</h1>
            </div>
            <div className="aboutDescription">
                <p>Im a self-taught front-end developer looking to secure my first job
                    in the industry. 
                    I took the Argentina programa 2 course to start learning. 
                    But the road wasn't easy, as I faced feelings of loneliness and 
                    frustration while teaching myself. Undeterred, I managed my time and 
                    resources to spend late nights at the computer to get the job done 
                    (a lot of google, Stack Overflow and documentation) 
                    I may have started out with the goal of becoming a full 
                    stack web developer, but my passion for design and my background in the 
                    field (designer) ultimately drew me to focus on front-end development. I am a 
                    determined and self-driven individual who is committed to delivering 
                    quality results, and I am eager to bring my passion and expertise to a 
                    dynamic team.</p>
                <div className="aboutSkills">
                    <ul>
                        <li>Creative <span>(design thinking).</span></li>
                        <li>Team work experience <span>(university projects).</span></li>
                        <li>Multitasking.</li>
                        <li>Frustration tolerance <span>(wouldn't be here lol).</span></li>
                        <li>Like to learn new things.</li>
                        <li>Always lookin for best solutions.</li>
                    </ul>
                </div>
                <img src="src/assets/imagenes/cats.png" alt="" />
            </div>
        </motion.div>
    )
}

export default About
