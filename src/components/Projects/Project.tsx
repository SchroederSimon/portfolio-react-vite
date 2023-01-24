import { useEffect, useState } from 'react';
import { ProjectsInterface } from '../../models/bigProjectInterface';
import '../../components/Projects/Project.css';


const BIG_PROJECTS = [
    {
        title: "Project",
        name: "CRUD portfolio",
        description: "Personal website with CRUD (img and text) options after sign in. In this project i learn about APIs, noSQL database (firebase), user authentication, auth guard, make services to manage the requests, do components reutilizables, use toastr to display erros to the user (some feedback), interfaces in Angular, learn CSS, about forms in Angular, made contact form usable with emailjs, learned some SEO too and how to optimize my webpage with lighthouse (google) and finally how to deploy a project through firebase.",
        videoLink: "https://www.youtube.com/embed/vZHDCJfD1rs",
        icons: "src/assets/imagenes/prueba-iconos.png",
        linkGit: "https://github.com/SchroederSimon/ArgentinaPrograma",
        linkDeploy: "https://argentinaprograma-3231d.web.app/#/portfolio"
    },
    {
        title: "Project",
        name: "Crud Cards",
        description: "Make cards to write down concepts while you are studying. Another CRUD made it with React - Node (Express) - TypeScript - MongoDB (backend) and HTML, CSS for the front end",
        videoLink: "https://www.youtube.com/embed/RqXxkUh4DSo",
        icons: "src/assets/imagenes/todo.png",
        linkGit: "https://github.com/SchroederSimon/Cards-React-Vite",
        linkDeploy: ""
    }
]

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

