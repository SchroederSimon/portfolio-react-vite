import { useEffect, useState } from 'react';
import { SmallProjectsInterface } from '../../models/smallProjectInterface';
import '../../components/SmallProjects/SmallProjects.css';

const SMALL_PROJECTS = [
    {
        title: "Project",
        name: "Personal portfolio",
        description: "My personal web portfolio built with React, Vite, and CSS is a sleek, modern, and user-friendly website that showcases my skills and experience as a web developer.",
        image: "src/assets/imagenes/portfolio.png",
        usedTech: "TS - React - Vite - CSS",
        linkGit: "https://github.com/SchroederSimon/portfolio-react-vite"
    },
    {
        title: "Project",
        name: "REST API",
        description: "I've made a restful api using node.js express and mongodb together with mongoose. (with video tutorial help @developedbyed)",
        image: "src/assets/imagenes/apimongo.png",
        usedTech: "JS - MongoDB - Express",
        linkGit: "https://github.com/SchroederSimon/Api_Mongo_Practica"
    },
    {
        title: "Project",
        name: "REST API",
        description: "REST API with JWT authentication and connected to MySql database (CRUD). This API was linked to toDo project (under construction).",
        image: "src/assets/imagenes/todobd.png",
        usedTech: "TS - MySql - Express",
        linkGit: "https://github.com/SchroederSimon/MySql-Jwt-login"
    },
    {
        title: "Project",
        name: "News API",
        description: "Filter news by country and theme. It’s connected to an API. Learned how to send data between components, how to consume an API, bootstrap and some other features of Angular.",
        image: "src/assets/imagenes/apinews.png",
        usedTech: "Angular - TS - HTML - Bootstrap",
        linkGit: "https://github.com/SchroederSimon/prueba-api-noticias",
    }
]

function SmallProjects() {

    const [smallProject, setSmallProjects] = useState<SmallProjectsInterface[]>([])

    useEffect(() => {
        setSmallProjects(SMALL_PROJECTS)
    }, [])

    return (
        <div className="smallProjectContainer">
            <div className="projectText">
                <h1>More things I've built</h1>
            </div>
            <div className="projectGrid2">
                {
                    smallProject.map(proyectoCorto => {
                        return (
                            <div className="cardContainer">
                                <div className="information">
                                    <a href={proyectoCorto.linkGit} target="_blank"><i className="fa-brands fa-github"></i></a>
                                    <h2>{proyectoCorto.name}</h2>
                                    <p>{proyectoCorto.description}</p>
                                    <img src={proyectoCorto.image} alt="" />
                                    <p>{proyectoCorto.usedTech}</p>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="text">
                <h1>Check out my board!</h1>
            </div>
            <div className="miroBoard">
                <p>Welcome to my digital canvas on Miro! It's a powerful tool that 
                    I use to bring order to my ideas. I use it to quickly sketch out 
                    designs, jot down notes for future projects, and even document my 
                    journey of learning programming languages like TypeScript, and 
                    frameworks like Angular (also React library and other things). 
                    I wanted to share this board with you so you can get a glimpse 
                    into my creative process, and maybe even draw some conclusions 
                    about my passion for web development. I also use it in combination 
                    with Figma to make my designs come to life. Take a look around, 
                    and I hope you find it as useful as I do!
                </p>
                <iframe width="800" height="600" src="https://miro.com/app/live-embed/uXjVPAqN1pE=/?moveToViewport=9733,1497,4130,2084&embedId=430397728430" frameBorder="0" scrolling="no" allowFullScreen></iframe>
            </div>
        </div>

    )
}

export default SmallProjects;

