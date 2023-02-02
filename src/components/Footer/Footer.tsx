import '../../components/Footer/Footer.css'


function Footer() {
    return (
        <div className="footerContainer">
            <ul>
                <li>
                    <a aria-label="Linkedin" href="https://www.linkedin.com/in/simon-schroeder-a2847a1b7/" target="_blank">
                        <i className="fa-brands fa-linkedin-in fa-2xl"></i>
                    </a>
                    <a aria-label="Github" href="https://github.com/SchroederSimon" target="_blank">
                        <i className="fa-brands fa-github fa-2xl"></i>
                    </a>
                    <a aria-label="Mail" href="simon.schroeder.dev@gmail.com" target="_blank">
                        <i className="fa-brands fa-at fa-2xl"></i>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default Footer;