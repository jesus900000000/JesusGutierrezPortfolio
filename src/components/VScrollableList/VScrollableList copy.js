import React from "react";
import './VScrollableList.css';
import DropDown from "../DropDown/DropDown";

// Projects data
const projects = [
    {
        name: "Encrypted UAV/Drone Communications Protocol",
        subtitle: "Encrypted UAV/Drone Communications Protocol - St. Mary's University Drone Lab",
        description: `• Designed and implemented a custom encrypted UAV communications protocol for the St. Mary's University Drone Lab
• Built telemetry and control channels over radio hardware using C and Linux, optimizing for sub-20ms latency and reliable ground-to-air messaging
• Integrated OpenSSL-based payload encryption with Raspberry Pi hardware to ensure secure UAV operations in constrained environments
• Led end-to-end design including protocol framing, error handling, networking, and hardware interfacing across heterogeneous systems
`,
        photo: "/ProjectImages/radio.png",
        width: "250px",
        height: "220px",
        codeLink: "https://github.com/jesus900000000/UAVPROJECTandRESUME",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://www.svgrepo.com/show/424983/drone.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            "https://assets.ubuntu.com/v1/a7e3c509-Canonical%20Ubuntu.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/OpenSSL_logo.svg/500px-OpenSSL_logo.svg.png?20200204215409"
        ]
    },
    {
        name: "CarAI - Personal Car Maintenance AI Assistant - In Development",
        subtitle: "Personal AI assistant for Car Maintenance and Diagnostics while on the go",
        description: `• I Identified an overlooked UX gap in automotive telemetry: real data exists, but consumers can’t access or interpret it in real-time.
• Bridges gap between normal people and mechanics. Now anyone can maintain their car’s health using natural language.
• Engineered a live OBD-II data pipeline using Bluetooth + Python + FastAPI to expose ECU signals for diagnostics and performance use.
• Reduced complexity of automotive telemetry by abstracting protocol-level commands into clean, developer-friendly endpoints.
• Strong demonstration of product thinking + system integration across hardware, embedded protocols, and full-stack data services.
`,
        photo: "/ProjectImages/carai1.png",
        width: "450px",
        height: "450px",
        codeLink: "",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
            "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png",
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ollama-icon.png",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.worldvectorlogo.com/logos/expo-go-app.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
            "https://upload.wikimedia.org/wikipedia/commons/d/da/Bluetooth.svg"

            
        ]
    },
        {
        name: "Gaming Tracker Desktop App - Releasing soon!",
        subtitle: "Desktop Gaming Stats Tracker",
        description: `• Designed and built a desktop companion app for surfacing player stats and metrics from a large global gaming ecosystem
• Consumed and normalized REST API responses into structured data models for UI rendering and user workflows
• Implemented local persistence + caching strategies to support offline usage and reduce redundant network fetches
• Led full development lifecycle including data integration, UX flows, cross-platform packaging, and deployment on Linux/Windows
`,
        photo: "/ProjectImages/elec.jpg",
        width: "575px",
        height: "400px",
        codeLink: "",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        ]
    },
    {
        name: "Custom Automated Bots for Discord Communities",
        subtitle: "Discord Bots for Gaming Community Engagement",
        description: `• Developed Discord bots using Node.js and Discord API to automate engagement workflows within gaming communities
• Implemented message dispatching, simulated interactions, and event-trigger workflows to drive participation
• Deployed bots with 24/7 uptime on Linux server infrastructure with persistent data storage
• Owned full stack of development, deployment, and operational monitoring for multiple bot instances
`,
        photo: "/ProjectImages/yapper.png",
        width: "250px",
        height: "250px",
        codeLink: "https://discord.com/users/164193891648536576",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        ]
    },

    {
        name: "Linux Server",
        subtitle: "Personal Linux Server - CasaOS and Ubuntu",
        description: `• Deployed and operated a Linux server environment for hosting personal software services and development workloads
• Utilized Docker + CasaOS for container orchestration, service discovery, and persistent storage management
• Configured Cloudflare routing for secure remote access, network isolation, and domain-level protection
• Managed operational concerns including uptime, service deployment, resource monitoring, and update workflows
`,
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
        description: `• Built and deployed a React-based portfolio site as a live hub for projects, experience, and technical background
• Integrated custom domain + HTTPS with DNS configuration and hosting controls
• Designed responsive UI and interaction patterns optimized for recruiters and hiring funnels
• Continuously maintained and iterated on site content and structure to reflect ongoing work and growth
`,
        photo: "/ProjectImages/portfolio.png",
        width: "700px",
        height: "250px",
        codeLink: "https://jesusgutierrez.dev/",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cloudflare-color.png",
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        ]
    },
    {
        name: "Custom Linux Gaming Server for a University Club",
        subtitle: "Running on custom Linux hardware on Ubuntu and CasaOS",
        description: `• Deployed and maintaining a Linux-based gaming server for a local university club with live multi-user concurrency
• Implemented secure remote access using Cloudflare tunnels and containerized network services
• Enhanced server features through plugins, scripting, and custom Java + bash tooling
• Owned uptime management, update cycles, resource allocation, and operational troubleshooting for community usage`,
        photo: "/ProjectImages/mcserver.png",
        width: "750px",
        height: "350px",
        codeLink: "https://www.instagram.com/utsa_animekurabu/p/DP7Ltclj9Zf/?hl=en",
        logos: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
            "https://wiki.casaos.io/_assets/casaos_logo_hd.svg",
            "https://assets.ubuntu.com/v1/a7e3c509-Canonical%20Ubuntu.svg",
            "https://cdn.iconscout.com/icon/free/png-256/java-60-1174953.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Bash_Logo_Colored.svg/2048px-Bash_Logo_Colored.svg.png",
            "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cloudflare-color.png"
        ]
    },
    {
        name: "Airbnb Duplicate Website",
        subtitle: "Functional Duplicate Website of Airbnb - utilizing ReactJS",
        description: `• Re-implemented core UI/UX patterns of a modern rental marketplace using React and component-based architecture
• Modeled property listings with structured props for pricing, ratings, categories, and media assets
• Designed responsive layouts and front-end routing flows aligned with real-world product UX
• Practiced product reverse-engineering to improve implementation reasoning and design fidelity
`,
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
