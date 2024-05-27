import React from "react";

import './Info.css';
import profileImage from '../../assets/profile.jpg';
import Button from '../../shared/Button/Button';

const Info = props => {

    const handleClick = () => {
        const link = document.createElement('a');
        link.href = '../../assets/cv/ingles.pdf'; 
        link.download = 'SebastianHcv.pdf';
        link.click();
    };

    return (
        <aside>
            <img src={profileImage} />
            <h3>Sebastian Huertas</h3>
            <p className="profession" >Junior Programmer</p>

            <div className="tooltip-container">
                <div className="tooltip">
                    <div className="profile">
                        <div className="user">
                            <div className="img">Ui</div>
                            <div className="details">
                                <div className="name">Sebastian Huertas</div>
                                <div className="username">@username</div>
                            </div>
                        </div>
                        <div className="about">500+ Connections</div>
                    </div>
                </div>
                <div className="text">
                    <div className="icons-row">
                        <a className="icon" href="https://www.linkedin.com/in/sebasti%C3%A1n-huertas-53b749207/" target="_blank">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-linkedin">
                                    <svg viewBox="0 0 448 512" height="1em">
                                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="text">LinkedIn</div>
                        </a>
                        <a className="icon" href="https://github.com/xtsebas" target="_blank">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-github">
                                    <svg viewBox="0 0 16 16" height="1em">
                                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.002 8.002 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="text">GitHub</div>
                        </a>
                    </div>
                    <div className="icons-row">
                        <a className="icon" href="https://www.instagram.com/xtsebas/" target="_blank">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-instagram">
                                    <svg viewBox="0 0 448 512" height="1em">
                                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9S160.5 370.8 224.1 370.8 339 319.5 339 255.9 287.7 141 224.1 141zm0 186c-39.2 0-71.1-31.9-71.1-71.1S184.9 184.9 224.1 184.9 295.2 216.8 295.2 255.9 263.3 327 224.1 327zm146.4-194.6c0 14.9-12.1 27-27 27-14.9 0-27-12.1-27-27s12.1-27 27-27 27 12.1 27 27zm76.1 27.2c-1.7-35.7-9.9-67.4-35.6-93.1-25.7-25.7-57.4-33.9-93.1-35.6-36.7-2.1-147.3-2.1-184 0-35.7 1.7-67.4 9.9-93.1 35.6-25.7 25.7-33.9 57.4-35.6 93.1-2.1 36.7-2.1 147.3 0 184 1.7 35.7 9.9 67.4 35.6 93.1 25.7 25.7 57.4 33.9 93.1 35.6 36.7 2.1 147.3 2.1 184 0 35.7-1.7 67.4-9.9 93.1-35.6 25.7-25.7 33.9-57.4 35.6-93.1 2.1-36.7 2.1-147.3 0-184zm-48.2 224c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.8 9s-103.4 2.6-132.8-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.8s-2.6-103.4 9-132.8c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.8-9s103.4-2.6 132.8 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.8s2.6 103.4-9 132.8z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="text">Instagram</div>
                        </a>
                        <a className="icon" href="https://x.com/GomezSebs" target="_blank">
                            <div className="layer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-twitter">
                                    <svg viewBox="0 0 512 512" height="1em">
                                        <path d="M459.37 151.716h.325c.248 3.552.248 7.104.248 10.676 0 109.28-83.193 235.042-235.044 235.042-46.56 0-90.003-13.698-126.413-37.299 6.654.772 13.308 1.048 19.962 1.048 38.518 0 73.96-13.698 102.922-36.88-36.021-.772-66.227-24.188-76.604-56.574 5.024.772 10.048 1.548 15.322 1.548 7.299 0 14.598-.772 21.573-2.12-37.944-7.797-66.228-41.151-66.228-81.316 0-.382 0-.772.248-1.164 11.125 6.173 24.057 9.897 37.614 10.325-22.347-14.951-37.112-40.641-37.112-69.591 0-15.322 4.098-29.61 11.125-41.912 40.922 50.34 102.243 83.574 171.374 87.289-1.221-6.173-1.946-12.519-1.946-18.864 0-46.568 37.946-84.514 84.514-84.514 24.297 0 46.169 10.325 61.423 26.926 19.268-3.792 37.62-10.773 54.083-20.34-6.575 20.645-20.645 37.944-38.997 48.825 17.166-2.12 33.915-6.573 49.171-13.319-11.496 16.743-26.112 31.449-42.926 43.182z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className="text">Twitter</div>
                        </a>
                    </div>
                </div>
            </div>

            <p>thiagohugo2018@gmail.com <br/> +502 4574-6057 </p>

            <Button text="Download CV " onClick={handleClick} />
        </aside>
    );
};

export default Info;