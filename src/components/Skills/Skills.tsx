import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react'
import '../../components/Skills/Skills.css'
import useIsVisibleOnScreen from '../../hooks/scrollHook';
import { skillsInterface } from '../../models/skillsInterface';
import SKILLS from '../../shared/SKILLS';


function Skills() {

    const [skills, setSkills] = useState<skillsInterface[]>([])

    useEffect(() => {
        setSkills(SKILLS)
    }, []);

    //Scroll animation
    const myRef = useRef(null);
    const [isVisible] = useIsVisibleOnScreen(myRef);

    return (
        <motion.div className="skillsContainer"
            ref={myRef}
            animate={{ opacity: isVisible ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <h1>Skills</h1>
            <div className="centerSkills">
                {
                    skills.map(skill => {
                        return (
                            <motion.div key={skill.id}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 8 }}
                                className="skillsImage">
                                <img src={skill.imageUrl} alt={`Image for ${skill.nombre}`} className="iconsSkill" />
                                <div className="imageOverlay imageOverlay--primary">
                                    <div className="imageTitle">
                                        {skill.nombre}
                                    </div>
                                    <p className="imageDescription">
                                        {skill.level}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Skills