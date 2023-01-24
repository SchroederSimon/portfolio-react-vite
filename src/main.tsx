import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//Components

import Projects from './components/Projects/Project'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'
import SmallProjects from './components/SmallProjects/SmallProjects'
import Skills from './components/Skills/Skills'
import About from './components/About/About'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Sidebar />
    <Projects />
    <SmallProjects />
    <Skills />
    <About />
  </React.StrictMode>,
)
