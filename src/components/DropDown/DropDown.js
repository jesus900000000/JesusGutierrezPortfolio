import { useState } from "react";
import GlassButton from "../GlassButton/GlassButton";
import './DropDown.css';

export default function DropDown({ category, description, photos, codeLink, height, width, logos, subtitle }) {
    const [mainOpen, setMainOpen] = useState(true);

    return (
        <div style={{ width: "100%" }}>
            <GlassButton
                style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "12px"
                }}
                onClick={() => setMainOpen(!mainOpen)}
            >
                {category}
                {logos?.map((logo, i) => (
                    <img
                        key={i}
                        src={logo}
                        alt="tech icon"
                        style={{
                            width: "40px",
                            height: "40px",
                            objectFit: "contain",
                        }}
                    />
                ))}
            </GlassButton>

            {mainOpen && (
                <div className="dropdown-div">

                    <div className="image-div">
                        <img
                            className="dropdown-image"
                            src={photos}
                            alt={category}
                            style={{ width, height }}
                        />
                    </div>

                    {/* clickable links only if they exist vvv */}
                    {codeLink && codeLink.trim() !== "" ? (
                        <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: "inline-block",
                                margin: "10px 0",
                                fontSize: "1.15rem",
                                fontWeight: 800,
                                textAlign: "center",
                                color: "#ffffff",
                                textDecoration: "none",
                                cursor: "pointer",
                                opacity: 0.9
                            }}
                        >
                            {subtitle}↗
                        </a>
                    ) : (
                        <div
                            style={{
                                display: "inline-block",
                                margin: "10px 0",
                                fontSize: "1.15rem",
                                fontWeight: 800,
                                textAlign: "center",
                                color: "#ffffff",
                                opacity: 0.9
                            }}
                        >
                            {subtitle}
                        </div>
                    )}



                    {/* description */}
                    <div
                        className="dropdown-description"
                        style={{
                            whiteSpace: 'pre-line',
                            lineHeight: 1.45,
                            textAlign: 'left',
                            display: 'inline-block',
                            marginTop: "6px"
                        }}
                    >
                        {description}
                    </div>

                </div>
            )}
        </div>
    );
}
