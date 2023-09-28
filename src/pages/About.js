import React, { useState } from 'react';


const About = () => {

    return (
        <div>
        {/* header image and about me beginning */}
        <img src="https://snz04pap002files.storage.live.com/y4mJQ72BDV5zj1WlZYBgDAIs1RtV9DsXxLOzME3jmoFvINl7ANWD6EpZO7hl3NbjU5-EdhKpRVLCPydlaZ8yGzm-7-Cq8M0dsYG2gIiHC1ju-dNdj5kSOKUen1lWGNepolmOO92OaixCZ7lj77t7IG74jhi4J9PpZMnyMxxWZFiv50CDs5buxXpW114QW0WoUWjeJL61fAtYPBTPw9dM7BcEOq7B-zXCS17JkDWkm0YjAk?encodeFailures=1&width=1153&height=824" class="img-fluid mx-auto d-block about-me-img" alt="About Josh"></img>
        
        <hr class="solid"></hr>
        <h2>About Me</h2>

        {/* About me description */}

        <p className="about-me-p">Hi! My name is Josh Molyneaux, and I am located in the Hartford County of Connecticut. I am a software Engineer by profession and a hobbyist photographer. I specialize in portrait photography, checkout out some of my highlights and feel free to contact me with any questions! Thank you for your interest in Akuphocus!</p>
        </div>
    );
};

export default About;