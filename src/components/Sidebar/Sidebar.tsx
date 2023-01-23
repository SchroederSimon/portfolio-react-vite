import '../../components/Sidebar/Sidebar.css'

function Sidebar() {

    return (
        <div className="sidebar">
                <div className="sidebarIcons">
                    <li><a aria-label="Linkedin" href="https://www.linkedin.com/in/simon-schroeder-a2847a1b7/"
                        target="_blank"><i className="fa-brands fa-linkedin-in fa-2x"></i></a></li>
                    <li><a aria-label="Github" href="https://github.com/SchroederSimon" target="_blank"><i
                        className="fa-brands fa-github fa-2x"></i></a></li>
                    <li><a aria-label="Twitter" href="https://twitter.com/SimonD3v" target="_blank"><i
                        className="fa-brands fa-twitter fa-2x"></i></a></li>
                </div>
        </div>
    )
}

export default Sidebar;