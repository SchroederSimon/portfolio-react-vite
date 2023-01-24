import { useEffect, useState } from 'react';
import { ProjectsInterface } from '../../models/bigProjectInterface';
import '../../components/Projects/Project.css';
import BIG_PROJECTS from '../../shared/PROJECTS';


function Projects() {

    const [projects, setProjects] = useState<ProjectsInterface[]>([])

    useEffect(() => {
        setProjects(BIG_PROJECTS)
    }, [])

    return (
        <div className="projectContainer">
            <div className="projectText">
                <h1>Some things I've built</h1>
            </div>
            {
                projects.map(proyecto => {
                    return (
                        <div className="projectGrid1">
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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Projects;

