import React from "react";
import "./Skills.css"; // Assuming you have a CSS file for styling


// Skills data
const skills = [
    {name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},
    {name: "Meta Support Engineer", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Meta_Platforms_logo.svg"},
    {name: "HCL Technologies Developer", logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/HCL_Technologies_logo.svg"},
    // {name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},
    // {name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},
    // {name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},
    // {name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"},
    // {name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"},
    {name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"},
    {name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"},
    {name: "C/C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"},
    {name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"},
    {name: "Parallel Programming", logo: "https://www.svgrepo.com/show/423416/cpu.svg"},
    {name: "Machine Learning", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"},
    {name: "APIs", logo: "https://www.svgrepo.com/show/489281/api.svg"},
    // {name: "Github", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},
    // {name: "Bilingual", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"},
    // {name: "Math Instructor", logo: "https://cdn.jsdelivr.net/.../math-teacher-icon.svg" },
    // {name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"},
    {name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"},
    {name: "Raspberry Pi", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg"},
    {name: "TLS", logo: "https://www.svgrepo.com/show/376559/lock-line.svg"},
    {name: "UAVs", logo: "https://www.svgrepo.com/show/424983/drone.svg"},
];


// SkillsBar component
export default function Skillsbar(){
    return (
        <div className="skills-bar">
            {skills.map((skill, index) => (
                <div key={index} className="skill">
                    <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                    <span className="skill-name">{skill.name}</span>
                </div>
            ))}
        </div>
    );
}