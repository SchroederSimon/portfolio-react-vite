import { useEffect, useState } from 'react';
import { ProjectsInterface } from '../../models/bigProjectInterface';
import '../../components/Projects/Project.css';
import BIG_PROJECTS from '../../shared/PROJECTS';
import { motion } from 'framer-motion';


function Projects() {

    const [projects, setProjects] = useState<ProjectsInterface[]>([])

    useEffect(() => {
        setProjects(BIG_PROJECTS)
    }, [])

    const itemVariants = {
        open: {
            opacity: 1,
            x: 0,
        },
        closed: {
            opacity: 0,
            x: "-50%"
        },
    }
    return (
        <div>
            <div className="projectContainer">
                <div className="projectText">
                    <motion.h1 variants={itemVariants}
                        initial="closed"
                        animate="open"
                        transition={{ duration: 5 }}
                    >Projects I've built</motion.h1>
                </div>
                {
                    projects.map((proyecto, i) => {
                        return (
                            <motion.div
                                key={proyecto.id}
                                variants={itemVariants}
                                initial="closed"
                                animate="open"
                                transition={{ duration: 5, delay: i * 0.8 }}
                                className="projectGrid1">
                                <div className="projectMedia">
                                    <iframe width="100%" height="1080" src={proyecto.videoLink}
                                        title="Project portfolio for Argentina Programa stage 2" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                                </div>
                                <div className="projectLeftInfo">
                                    <div className="projectTitle">
                                        <a href={proyecto.linkDeploy} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                        <a href={proyecto.linkGit} target="_blank"><i className="fa-brands fa-github"></i></a>
                                        <h3>{proyecto.title}</h3>
                                        <h2>{proyecto.name}</h2>
                                    </div>
                                    <div className="projectDescription">
                                        <p>{proyecto.description}</p>
                                    </div>
                                    <div className="projectIcons">
                                        <img src={proyecto.icons} alt={`Image for ${proyecto.name}`} />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Projects;

// initial="closed"
// whileInView="open"
// viewport={{ once: false }}