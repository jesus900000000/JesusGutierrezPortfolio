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
                        <img className="dropdown-image" src={photos} alt={category} style={{
                            width: width,
                            height: height
                        }} />
                    </div>
                    <div className="subtitle-div">{subtitle}</div>
                    <div className="description-div">{description}</div>

                </div>

            )}
        </div>
    );
}
