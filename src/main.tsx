import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//Components

import Projects from './components/Projects/Project'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Sidebar from './components/Sidebar/Sidebar'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Sidebar />
    <Projects />
  </React.StrictMode>,
)
