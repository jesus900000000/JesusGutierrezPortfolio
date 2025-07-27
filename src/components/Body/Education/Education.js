import React from "react";
import "./Education.css"; 




// Qualifications data
const qualifications = [
    {name: "Master of Science in Software Engineering", logo: "https://yt3.googleusercontent.com/ytc/AIdro_k2MeBTplQWNTAQNzKPerAxVb1At9o0pAoTMbKZdfcVpg=s900-c-k-c0x00ffffff-no-rj"},
    {name: "Bachelor of Science in Software Engineering", logo: "https://yt3.googleusercontent.com/ytc/AIdro_k2MeBTplQWNTAQNzKPerAxVb1At9o0pAoTMbKZdfcVpg=s900-c-k-c0x00ffffff-no-rj"},
    {name: "Associate of Arts in Liberal Arts", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT310qsuO0N_uJFcsT3YQdxzSBRv-BBcNJF_w&s"},
    {name: "Distinguished Highschool Diploma", logo: "https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_2/v1719358651/judsonisdorg/uhnfuuxowcxjvktqto7v/8.png"},
];







// Education component
export default function Education(){
    return (
        <div className="education-container">
            {qualifications.map((qualification, index) => (
                <div key={index} className="education">
                    <img src={qualification.logo} alt={`${qualification.name} logo`} className="education-logo" />
                    <span className="education-name">{qualification.name}</span>
                </div>
            ))}
        </div>
    );
}