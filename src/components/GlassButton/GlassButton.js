import React from "react";
import "./GlassButton.css"

export default function GlassButton({ onClick, children, style = {}, className = "" }) {

    return (
        <button
            className={`GlassButton ${className}`}
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    );


}