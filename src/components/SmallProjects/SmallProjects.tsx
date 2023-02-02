import { useEffect, useRef, useState } from 'react';
import { SmallProjectsInterface } from '../../models/smallProjectInterface';
import '../../components/SmallProjects/SmallProjects.css';
import SMALL_PROJECTS from '../../shared/SMALLPROJECTS';
import { AnimatePresence, motion } from 'framer-motion';
import useIsVisibleOnScreen from '../../hooks/scrollHook';


function SmallProjects() {
    const [smallProject, setSmallProjects] = useState<SmallProjectsInterface[]>([])

    useEffect(() => {
        setSmallProjects(SMALL_PROJECTS)
    }, []);

    //Scroll animation
    const myRef = useRef(null);
    const [isVisible] = useIsVisibleOnScreen(myRef);

    const [iframeLoaded, setIframeLoaded] = useState(false);

    const handleButtonClick = () => {
        setIframeLoaded(true);
    };


    return (
        <motion.div
            ref={myRef}
            animate={{ opacity: isVisible ? 1 : 0 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 3 }}
        >
            <div
                className="smallProjectContainer">
                <div className="projectText">
                    <h1>More things I've built</h1>
                </div>
                <div className="projectGrid2">
                    {
                        smallProject.map(proyectoCorto => {
                            return (
                                <div
                                    key={proyectoCorto.id}
                                    className="cardContainer">
                                    <div className="information">
                                        <a aria-label={`View more about in: ${proyectoCorto.linkGit}`} href={proyectoCorto.linkGit} target="_blank"><i className="fa-brands fa-github"></i></a>
                                        <h2>{proyectoCorto.name}</h2>
                                        <p>{proyectoCorto.description}</p>
                                        <img src={proyectoCorto.image} alt={`Image for ${proyectoCorto.name}`} />
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
                    <div className="miroBoardLazy">
                        {!iframeLoaded && (
                            <motion.button onClick={handleButtonClick}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300, damping: 8 }}
                            >Load board!</motion.button>
                        )}
                        {iframeLoaded && (
                            <iframe title="My miro board for extra info" width="700" height="600"
                                src="https://miro.com/app/live-embed/uXjVPAqN1pE=/?moveToViewport=9733,1497,4130,2084&embedId=430397728430"
                                frameBorder="0" scrolling="no" allowFullScreen />
                        )}

                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default SmallProjects;

