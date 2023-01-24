import { useState } from 'react'
import '../../components/About/About.css'

function About() {

    return (
        <div className="aboutContainer">
            <div className="aboutText">
                <h1>About Me</h1>
            </div>
            <div className="aboutDescription">
                <p>Hi, I'm currently studying to be a self-taught front-end developer and trying to get my first job.
                    I've done Argentina programa 2 but felt lonely in the process, so I learned how to manage my time and
                    resources to learn by myself.
                    In that way I think this course reflects my personality. I was in front of a challenge and did everything to
                    do my best.
                    I had to overcome frustration, use a lot of google and stay long nights at the pc.
                    The course is planned to teach how to be a full stack web developer, but I just prefer front-end because I
                    have a good background in design.</p>
                <div className="aboutSkills">
                    <ul>
                        <li>Creative <span>(design thinking).</span></li>
                        <li>Team work experience <span>(university projects).</span></li>
                        <li>Multitasking.</li>
                        <li>Frustration tolerance <span>(wouldn't be here lol).</span></li>
                        <li>Like to learn new things.</li>
                        <li>Always lookin for best solutions.</li>
                    </ul>
                </div>
                <img src="src/assets/imagenes/cats.png" alt="" />
            </div>
        </div>
    )
}

export default About
