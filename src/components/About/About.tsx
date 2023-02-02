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
            transition={{ duration: 3 }}
        >
            <div className="aboutText">
                <h1>About Me</h1>
            </div>
            <div className="aboutDescription">
                <p>Hi, I'm a self-taught  front-end developer, trying to get my first job.
                    I've done Argentina programa 2 (gov course) but felt really lonely in
                    the process, so I learned how to manage my time and resources to learn
                    by myself. In this way, I believe it reflects my personality. I was in front
                    of a challenge and did everything to do my best to achieve that challenge. I
                    had to overcome frustration, use a lot of google, read a lot of documentation,
                    and stay long nights at the pc.
                    The course is planned to teach how to be a full stack web developer, but I just prefer front-end
                    because I have a good background in design and i liked most. But i'm obviously opened to new things.
                    Besides that course, I continue to study on my own, and making new projects (checkout my github :).
                    I see myself as a self-motivated person  who is committed to delivering quality results, and
                    I'm excited to bring my enthusiasm and skills to a dynamic team environment.</p>
                <div className="aboutSkills">
                    <ul>
                        <li>Creative <span>(design thinking).</span></li>
                        <li>UX knowledge.</li>
                        <li>Team work experience <span>(university projects).</span></li>
                        <li>Multitasking.</li>
                        <li>Frustration tolerance <span>(wouldn't be here lol).</span></li>
                        <li>Like to learn new things.</li>
                        <li>Always lookin for best solutions.</li>
                    </ul>
                </div>
                <img src="src/assets/imagenes/IMG_7231.png" alt="Profile picture" />
            </div>
        </motion.div>
    )
}

export default About
