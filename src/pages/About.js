import React, { useState } from 'react';


const About = () => {

    return (
        <div>
            {/* header image and about me beginning */}
            <img src="https://i.ibb.co/HVy0QYJ/East-Hart-1.jpg" class="img-fluid mx-auto d-block about-me-img" alt="About Josh"></img>

            <hr class="solid"></hr>
            <h2>About Me</h2>

            {/* About me description */}

            <p className="about-me-p">Hi! My name is Josh Molyneaux, and I am located in the Hartford County of Connecticut. I am a software Engineer by profession and a hobbyist photographer. I specialize in portrait photography, checkout out some of my highlights and feel free to contact me with any questions! Thank you for your interest in Akuphocus!</p>

            {/* Beginning of highlights section */}
            <hr class="solid"></hr>
            <h2>Highlights</h2>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://i.ibb.co/8D3M8pW/7-29-shoot-1.jpg" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/0M31HHw/Black-Goddess-1.jpg" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/94jXpwF/7-29-shoot-3.jpg" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://i.ibb.co/RpX6TNM/Black-Goddess-2.jpg" class="d-block w-100" alt="..."></img>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default About;