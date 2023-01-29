


//Components
import Projects from './components/Projects/Project'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'
import SmallProjects from './components/SmallProjects/SmallProjects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'
import useIsVisibleOnScreen from "./hooks/scrollHook";



function App() {
    return (
        <>
            <Sidebar />
            <Hero />
            <Projects />
            <SmallProjects />
            <Skills />
            <About />
        </>
    )
}

export default App
