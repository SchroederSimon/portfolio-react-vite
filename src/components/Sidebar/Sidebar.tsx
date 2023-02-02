import { motion } from 'framer-motion';
import '../../components/Sidebar/Sidebar.css'

const icons = [
    {
        id: 1,
        label: 'Linkedin',
        link: 'https://www.linkedin.com/in/simon-schroeder-a2847a1b7/',
        icon: 'fa-linkedin-in',
        target: "_blank"
    },
    {
        id: 2,
        label: 'Github',
        link: 'https://github.com/SchroederSimon',
        icon: 'fa-github',
        target: "_blank"
    },
    {
        id: 3,
        label: 'Email',
        link: 'mailto:simon.schroeder.dev@gmail.com',
        icon: 'fa-at',
    },
];

function Sidebar() {

    return (
        <motion.div className="sidebar"
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        >
            <div className="sidebarIcons">
                {icons.map((icon) => (
                    <ul  key={icon.id}>
                    <motion.li
                        whileHover={{ scale: 1.4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 8 }}
                    >
                        <a aria-label={icon.label} href={icon.link} target={icon.target}>
                            <i className={`fa-brands ${icon.icon} fa-2x`} />
                        </a>
                    </motion.li>
                    </ul>
                ))}
            </div>
        </motion.div>
    );
}

export default Sidebar;

