import React from "react";
import GlassCard from "../GlassCard/GlassCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import './VScrollableList.css';
import DropDown from "../DropDown/DropDown";



// Projects data
const projects = [
    {
        name: "Encrypted UAV/Drone Communications Protocol",
        subtitle: "Encrypted UAV/Drone Communications Protocol - St. Mary's University Drone Lab",
        description:
            "The St. Mary's University Drone Lab requested and receieved a fully custom encrypted UAV communications protocol. Together with my team, we designed and implemented this protocol using C, Ubuntu, Custom Radio antennas, and various Raspberry Pi platforms. Ensuring a secure and reliable communication between the ground station and the UAV within 20ms.",
        photo: "/ProjectImages/radio.png",
        width: "250px",
        height: "220px",
        codeLink: "https://github.com/jesus900000000/UAVPROJECTandRESUME",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://www.svgrepo.com/show/424983/drone.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            "https://www.svgrepo.com/show/376559/lock-line.svg"
        ]
    },
    {
        name: "Airbnb Duplicate Website",
        subtitle: "Functional Duplicate Website of Airbnb - utilizing ReactJS",
        description:
            "AirBnb Duplicate Website, using React Documention and freecodecamp to create this website dupe. Displays fully custom vacation rental properties with images, descriptions, prices, and ratings. Fully responsive and functional using modern web development practices.",
        photo: "/ProjectImages/airbnb.png",
        width: "500px",
        height: "250px",
        codeLink: "https://github.com/jesus900000000/dupeofairbnb",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        ]
    },
    {
        name: "Linux Server",
        subtitle: "Personal Linux Server - CasaOS and Ubuntu",
        description:
            "My Personal Linux Server running on a custom built PC utilizing Ubuntu and CasaOS. Server is used for developing custom software services, engineering, gaming, ISP network, containerization, API development, hobbies, file storage, and much more!",
        photo: "/ProjectImages/casaos.png",
        width: "500px",
        height: "250px",
        codeLink: "",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
            "https://www.svgrepo.com/show/376559/lock-line.svg",
            "https://www.svgrepo.com/show/489281/api.svg",
            "https://assets.ubuntu.com/v1/a7e3c509-Canonical%20Ubuntu.svg",
            "https://wiki.casaos.io/_assets/casaos_logo_hd.svg"
        ]
    },
    {
        name: "Personal Portfolio (this site)",
        subtitle: "My Personal Portfolio Website",
        description:
            "My personal portfolio website built using ReactJS, with HTTPS and custom domain. Showcasing my skills, experience, projects, and education. Designed with a modern and responsive layout. Feel free to explore and learn more about my professional journey!",
        photo: "/ProjectImages/portfolio.png",
        width: "700px",
        height: "250px",
        codeLink: "https://github.com/jesus900000000/JesusGutierrezPortfolio",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        ]
    }
    
];




export default function VScrollableList() {
    return (

        <div className="v-scrollable-list-div">
            {projects.map((project, index) => (
                <DropDown
                    key={index}
                    category={project.name}
                    subtitle={project.subtitle}
                    description={project.description}
                    photos={project.photo}
                    codeLink={project.codeLink}
                    width={project.width}      
                    height={project.height}   
                    logos={project.logos}

                />
            ))}
        </div>

    );
}
