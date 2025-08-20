import React from "react";
import GlassCard from "../GlassCard/GlassCard";
import ProjectCard from "../ProjectCard/ProjectCard";
import './HScrollableList.css';



// Projects data
const projects = [
    { name: "Encrypted Drone Protocol", description: "St. Mary's University Drone Lab requested and receieved a fully custom encrypted UAV communications protocol.", photo:"/ProjectImages/radio.png", codeLink: "https://github.com/jesus900000000/UAVPROJECTandRESUME"},
    { name: "Airbnb Dupe", description: "AirBnb Duplicate Website in works, using React Documention and freecodecamp to create this website dupe.", photo: "/ProjectImages/airbnb.png", codeLink: "https://github.com/jesus900000000/dupeofairbnb" },
    { name: "Personal CasaOS Linux Server", description: "Used for hobbies, file storage, communications, learning, among other cool things!", photo: "/ProjectImages/casaos.png", codeLink: "" },
    { name: "Personal Portfolio (this site)", description: "Personal Website. Completely Designed, Developed, and Deployed with a personal domain name by myself using industry leading tools and practices.", photo: "/ProjectImages/portfolio.png", codeLink: "https://github.com/jesus900000000/JesusGutierrezPortfolio" },
];


export default function HScrollableList() {
    return (

        <div className="h-scrollable-list-div">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    name={project.name}
                    description={project.description}
                    photos={project.photo}
                    codeLink={project.codeLink}
                    
                />
            ))}
        </div>

    );
}
