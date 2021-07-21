/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";
import Mugshot from "../../assets/images/aboutMe.jpg"

function About(){
    return(
        <div className = "uk-container">
            <div className = "uk-text-center">
                <div className = "about-container">
                    <div className = "about-me">
                    <img id = "mugshot" src={Mugshot} alt="Me" style={{ width: 180 }} />
                        <h1 className="about-me-title uk-heading-divider">About Me</h1>
                        <div className = "about-text-container"> 
                            <p>
                            lorem
                
                            </p>
                            <br></br>
                            <p>
                            lorem
                        
                            </p>
                        </div>
                        <div className="uk-text-center uk-text-middle">
                            <a uk-icon="icon: github-alt ; ratio: 1.5" className="contact-icon contact-link-icon" href=""  target="_blank"></a>
                            <a uk-icon="icon: mail ; ratio: 1.5" className="contact-icon contact-link-icon" href=""></a>
                            <a uk-icon="icon: linkedin ; ratio: 1.5" className="contact-icon contact-link-icon" href="" target="_blank"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About