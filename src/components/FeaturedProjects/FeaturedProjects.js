import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "CarAI",
    shortDescription:
      "AI powered vehicle diagnostics app using Bluetooth OBD II telemetry. Built for the everyday driver with real time insights and maintenance guidance.",
    longDescription:
      `• I Identified an overlooked UX gap in automotive telemetry: real data exists, but consumers can’t access or interpret it in real-time.
• Bridges gap between normal people and mechanics. Now anyone can maintain their car’s health using natural language.
• Engineered a live OBD-II data pipeline using Bluetooth + Python + FastAPI to expose ECU signals for diagnostics and performance use.
• Reduced complexity of automotive telemetry by abstracting protocol-level commands into clean, developer-friendly endpoints.
• Strong demonstration of product thinking + system integration across hardware, embedded protocols, and full-stack data services.
      `,
    github: "",
    demo: "",
    tech: [
      {
        name: "Ollama",
        logo: "https://ollama.com/public/ollama.png",
      },
      {
        name: "Bluetooth",
        logo: "https://cdn.simpleicons.org/bluetooth/0082FC",
      },
      {
        name: "OBD II",
        logo: "https://img.icons8.com/color/48/engine.png",
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/carai1.png",
        style: {
          objectPosition: "center top",
          width: "80%",
          height: "100%",
        },
      },
    ],
  },
  {
    id: 2,
    title: "Hypixel Tracker",
    shortDescription:
      "Multi platform app for analytics and global gaming community statistical player tracking.",
    longDescription:
      `• Designed and built a desktop companion app for surfacing player stats and metrics from a large global gaming ecosystem
• Consumed and normalized REST API responses into structured data models for UI rendering and user workflows
• Implemented local persistence + caching strategies to support offline usage and reduce redundant network fetches
• Led full development lifecycle including data integration, UX flows, cross-platform packaging, and deployment on Linux/Windows`,
    github: "",
    demo: "",
    tech: [
      {
        name: "React Native",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Redis",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
      },
      {
        name: "Electron",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg",
      },
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },

    ],
    images: [
      {
        src: "/ProjectImages/elec.jpg",
        style: {
          objectPosition: "center",
          width: "100%",
          height: "80%",
          paddingTop: "10%",
        },
      },
    ],
  },
  {
    id: 3,
    title: "UAV Encrypted Drone Communications Protocol",
    shortDescription: "Encrypted UAV/Drone communications Protocol and Telemetry tracking using Radio and SSL Encryption",
    longDescription:
     `• Designed and implemented a custom encrypted UAV communications protocol for the St. Mary's University Drone Lab
       • Built telemetry and control channels over radio hardware using C and Linux, optimizing for sub-20ms latency and reliable ground-to-air messaging
       • Integrated OpenSSL-based payload encryption with Raspberry Pi hardware to ensure secure UAV operations in constrained environments
       • Led end-to-end design including protocol framing, error handling, networking, and hardware interfacing across heterogeneous systems
      `,
    github: "",
    demo: "",
    tech: [
      {
        name: "C",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      },
      {
        name: "Ubuntu",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg",
      },
      {
        name: "TLS",
        logo: "https://www.svgrepo.com/show/376559/lock-line.svg",
      },
      {
        name: "Raspberry Pi",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
      },

    ],
    images: [
      {
        src: "/ProjectImages/radio.png",
        style: {
          objectPosition: "center top",
          width: "100%",
          height: "100%",
        },
      },
    ],
  },
  {
    id: 4,
    title:
      "Production-Style DevOps Server with Kubernetes, Vault, Grafana, and Backend Services",
    shortDescription: "Kubernetes monitoring and deployment environment, with Grafana dashboards and Vault secrets management.",
    longDescription:
      `• Deployed and operated a Linux server environment for hosting personal software services and development workloads
• Kubernetes-style container orchestration using Docker Compose for service management, discovery, and persistent storage
• Grafana + Prometheus monitoring stack for real-time resource usage tracking, alerting, and performance optimization
• Git-based deployment workflows with CI/CD pipelines for streamlined updates and maintenance of hosted services`,
    github: "",
    demo: "",
    tech: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Fedora Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fedora/fedora-original.svg",
      },
      {
        name: "Grafana",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
      {
        name: "Vault",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vault/vault-original.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/grafana.png",
        style: {
          objectPosition: "center top",
          width: "100%",
          height: "80%",
          transform: "scale(.9)",
          paddingTop: "10%",
        },
      },
    ],
  },
  {
    id: 5,
    title: "Portfolio",
    shortDescription: "Interactive portfolio site with expandable projects.",
    longDescription:
    `• Built and deployed a React-based portfolio site as a live hub for projects, experience, and technical background
• Integrated custom domain + HTTPS with DNS configuration and hosting controls
• Designed responsive UI and interaction patterns optimized for recruiters and hiring funnels
• Continuously maintained and iterated on site content and structure to reflect ongoing work and growth`,
    github: "",
    demo: "",
    tech: [
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      },
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "TLS",
        logo: "https://www.svgrepo.com/show/376559/lock-line.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/portfolio.png",
        style: {
          objectPosition: "center",
          width: "100%",
          height: "95%",
          paddingTop: "5%",
        },
      },
    ],
  },
  {
    id: 6,
    title: "Discord Bots",
    shortDescription: "Automated chatting bots for community management.",
    longDescription:
      `• Developed Discord bots using Node.js and Discord API to automate engagement workflows within gaming communities
• Implemented message dispatching, simulated interactions, and event-trigger workflows to drive participation
• Deployed bots with 24/7 uptime on Linux server infrastructure with persistent data storage
• Owned full stack of development, deployment, and operational monitoring for multiple bot instances`,
    github: "",
    demo: "",
    tech: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/yapper.png",
        style: {
          objectPosition: "center top",
          width: "100%",
          height: "100%",
        },
      },
    ],
  },
  {
    id: 7,
    title: "Custom Linux Gaming Server",
    shortDescription:
      "Self hosted gaming server environment with performance optimizations.",
    longDescription:
     `• Deployed and maintaining a Linux-based gaming server for a local university club with live multi-user concurrency
• Implemented secure remote access using Cloudflare tunnels and containerized network services
• Enhanced server features through plugins, scripting, and custom Java + bash tooling
• Owned uptime management, update cycles, resource allocation, and operational troubleshooting for community usage`,
    github: "",
    demo: "",
    tech: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Ubuntu",
        logo: "https://assets.ubuntu.com/v1/a7e3c509-Canonical%20Ubuntu.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Cloudflare",
        logo: "https://www.svgrepo.com/show/353564/cloudflare.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/mcserver.png",
        style: {
          objectPosition: "center",
          width: "100%",
          height: "70%",
          paddingTop: "15%",
        },
      },
    ],
  },
{
    id: 8,
    title: "Multi-Service Host Environment",
    shortDescription:
      "Built and managed a self-hosted multi-service environment running containerized applications with secure remote access and reliable deployment workflows.",
    longDescription:
     `• Built and maintained a multi-service host environment supporting containerized applications including bots, APIs, and game servers
• Deployed and managed services using Docker and CasaOS, enabling workload isolation, simplified deployments, and persistent storage
• Configured secure external access and routing using Cloudflare, allowing remote connectivity without exposing internal network infrastructure
• Monitored system performance and ensured reliability through service management, resource optimization, and continuous updates`,
    github: "",
    demo: "",
    tech: [
      {
        name: "Node.js",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Ubuntu",
        logo: "https://assets.ubuntu.com/v1/a7e3c509-Canonical%20Ubuntu.svg",
      },
      {
        name: "CasaOS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/casaos/casaos-original.svg",
      },
      {
        name: "Cloudflare",
        logo: "https://www.svgrepo.com/show/353564/cloudflare.svg",
      },
    ],
    images: [
      {
        src: "/ProjectImages/casaos.png",
        style: {
          objectPosition: "center",
          width: "100%",
          height: "70%",
          paddingTop: "15%",
        },
      },
    ],
  },
];

function chunkProjects(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const projectPages = chunkProjects(projects, 4);

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, projectPages.length - 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <section className="featured-projects">
      <div className="projects-group-carousel">
        <button
          className="projects-group-arrow"
          onClick={handlePrev}
          disabled={currentPage === 0}
        >
          ‹
        </button>

        <div className="projects-group-viewport">
          <div
            className="projects-group-track"
            style={{ transform: `translateX(-${currentPage * 100}%)` }}
          >
            {projectPages.map((page, pageIndex) => (
              <div className="projects-group-page" key={pageIndex}>
                <div className="projects-grid">
                  {page.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onExpand={() => setSelectedProject(project)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="projects-group-arrow"
          onClick={handleNext}
          disabled={currentPage === projectPages.length - 1}
        >
          ›
        </button>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}