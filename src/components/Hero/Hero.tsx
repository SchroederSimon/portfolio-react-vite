import { useState } from 'react'
import '../../components/Hero/Hero.css'

function Hero() {

    return (
            <div className="heroContainer">
                <div className="heroText">
                    <p>Hi, my name is</p>
                    <h2>Simon Schroeder</h2>
                    <p>I am a self-taught front end developer with a passion for design.</p>
                </div>
                <div className="heroWrap">
                    <button><a href="https://www.w3schools.com" target="_blank">RESUME</a></button>
                    <div className="circle"></div>
                    <div className="circle2"></div>
                    <div className="circle3"></div>
                    <div className="circle4"></div>
                </div>
            </div>
    )
}

export default Hero
