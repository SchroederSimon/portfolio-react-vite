
// Components
import Projects from './components/Projects/Project'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'
import SmallProjects from './components/SmallProjects/SmallProjects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'




function App() {
    return (
        <>
            <Sidebar />
            <section id="home"><Hero /></section>
            <section id="projects"><Projects /></section>
            <SmallProjects />
            <section id="skills"><Skills /></section>
            <section id="about"><About /></section>
        </>
    )
}

export default App
