import { useEffect, useRef, useState } from 'react';
import { ProjectsInterface } from '../../models/bigProjectInterface';
import '../../components/Projects/Project.css';
import BIG_PROJECTS from '../../shared/PROJECTS';
import { motion } from 'framer-motion';
import useIsVisibleOnScreen from '../../hooks/scrollHook';

//Video
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'


function Projects() {

    const [projects, setProjects] = useState<ProjectsInterface[]>([])

    useEffect(() => {
        setProjects(BIG_PROJECTS)
    }, []);

    //Scroll animation
    const myRef = useRef(null);
    const [isVisible] = useIsVisibleOnScreen(myRef);

    return (
        <motion.div
            ref={myRef}
            animate={{ opacity: isVisible ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div className="projectContainer">
                <div
                    className="projectText">
                    <h1>Projects I've built</h1>
                </div>
                {
                    projects.map((proyecto) => {
                        return (
                            <div key={proyecto.id}
                                className="projectGrid1">
                                <div className="projectMedia">
                                    <LiteYouTubeEmbed
                                        id={proyecto.videoLink}
                                        title={proyecto.name}
                                        poster="sddefault"
                                        iframeClass="iframe"
                                        playerClass="lty-playbtn"
                                    />
                                </div>
                                <div className="projectLeftInfo">
                                    <div className="projectTitle">
                                        <a aria-label={`View more about in: ${proyecto.linkDeploy}`} href={proyecto.linkDeploy} target="_blank"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                                        <a aria-label={`View more about in: ${proyecto.linkGit}`} href={proyecto.linkGit} target="_blank"><i className="fa-brands fa-github"></i></a>
                                        <h2>{proyecto.title}</h2>
                                        <h3>{proyecto.name}</h3>
                                    </div>
                                    <div className="projectDescription">
                                        <p>{proyecto.description}</p>
                                    </div>
                                    <div className="projectIcons">
                                        <img src={proyecto.icons} alt={`Image for ${proyecto.name}`} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </motion.div>
    )
}

export default Projects;
