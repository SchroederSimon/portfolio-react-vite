import { motion } from 'framer-motion';
import '../../components/Sidebar/Sidebar.css'

const icons = [
    {
        id: 1,
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/simon-schroeder-a2847a1b7/',
        icon: 'fa-linkedin-in',
    },
    {
        id: 2,
        label: 'Github',
        link: 'https://github.com/SchroederSimon',
        icon: 'fa-github',
    },
    {
        id: 3,
        label: 'Twitter',
        link: 'https://twitter.com/SimonD3v',
        icon: 'fa-twitter',
    },
];

function Sidebar() {

    return (
        <div className="sidebar">
            <div className="sidebarIcons">
                {icons.map((icon) => (
                    <motion.li
                        key={icon.id}
                        whileHover={{ scale: 1.4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}
                    >
                        <a aria-label={icon.label} href={icon.link} target="_blank">
                            <i className={`fa-brands ${icon.icon} fa-2x`} />
                        </a>
                    </motion.li>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;

