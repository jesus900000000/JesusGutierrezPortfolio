import React from "react";

export default function FancyTitle({ title }) {
    return (
        <div style={{ position: 'relative' }}>
            <h2
                style={{
                    position: 'relative',
                    top: '25px',
                    fontFamily: 'Great Vibes',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: 'white',
                    zIndex: 10,
                    background: 'rgba(0, 0, 0, 0)',
                }}
            >
                {title}
            </h2>
        </div>
    );
}