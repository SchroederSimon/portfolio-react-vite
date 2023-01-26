import { useEffect, useState } from 'react'
import '../../components/Skills/Skills.css'
import { skillsInterface } from '../../models/skillsInterface';
import SKILLS from '../../shared/SKILLS';


function Skills() {

    const [skills, setSkills] = useState<skillsInterface[]>([])

    useEffect(() => {
        setSkills(SKILLS)
    }, [])

    return (
        <div className="skillsContainer">
            <h1>Skills</h1>
            <div className="centerSkills">
                {
                    skills.map(skill => {
                        return (
                            <div key={skill.id}
                            className="skillsImage">
                                <img src={skill.imageUrl} alt="" className="iconsSkill" />
                                <div className="imageOverlay imageOverlay--primary">
                                    <div className="imageTitle">
                                        {skill.nombre}
                                    </div>
                                    <p className="imageDescription">
                                        {skill.level}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills