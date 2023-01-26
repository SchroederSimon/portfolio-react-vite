import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

//Components
import Projects from './components/Projects/Project'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'
import SmallProjects from './components/SmallProjects/SmallProjects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'



function App() {

    return (
        <div>
            <Sidebar />
            <Header />
            <Hero />
            <Projects />
            <SmallProjects />
            <Skills />
            <About />
        </div>


    )
}

export default App
