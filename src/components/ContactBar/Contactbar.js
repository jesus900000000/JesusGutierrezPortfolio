import React from "react";
import "./Contactbar.css"; // Assuming you have a CSS file for styling
import Resume from "../../JesusGutierrezResume.pdf"; // Adjust the path as necessary

const contactInfo = [
    {
        name: "Gmail",
        logo: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
        url:   "https://mail.google.com/mail/?view=cm&fs=1&to=jgutierrez9000@gmail.com&su=Portfolio Inquiery&body=Hi%20Jesus, I have taken a look at your portfolio and I would like to discuss further about ..."
    },
    {
        name: "LinkedIn",
        logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
        url: "https://www.linkedin.com/in/jesusgutierrez90/"
    },
    {
        name: "GitHub",
        logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
        url: "https://github.com/jesus900000000/JesusGutierrezPortfolio/blob/main/README.md"
    },
    {
        name: "Resume",
        logo: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
        url: {Resume},
        download: true,
    }
];





export default function Contactbar() {
    return (

        //phone
        <div className="main-contact-bar-container">
            <div className="phone-container">
                <img className="Phone-icon" src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone Icon" />
                <span className="phone-number">+1 (210) 259-5541</span>
            </div>

            {/* Email, LinkedIn, GitHub icons */}
            <div className="contact-bar">
                {contactInfo.map((contactInfoItem, index) => (
                    <div key={index} className="contact-item">
                        <a href={contactInfoItem.url} className="contact-link" target="_blank"
                            rel="noopener noreferrer"
                            download={contactInfoItem.download ? "JesusGutierrezSoftwareEngineerResume.pdf" : undefined}>
                            <div key={index} className="contact-item">
                                <img src={contactInfoItem.logo} alt={`${contactInfoItem.name} logo`} className="contact-logo" />
                            </div>
                        </a>

                    </div>
                ))}
            </div>
        </div>
    )
}