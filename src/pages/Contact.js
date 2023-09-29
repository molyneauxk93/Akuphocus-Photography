import React, { useState } from 'react';


const Contact = () => {

    return (
        <div>

            <p className="contact-me">Let's make this happen! Fill out the form below and I will be in touch with your to schedule your photoshoot! Please add any additional details you want to include in regards to your desired photoshoot! Thanks for choosing Akuphocus!</p>

            <div class="mb-3">
                <label for="contact-form" class="form-label">First Name</label>
                <input type="name" class="form-control" id="first-name"></input>
            </div>

            <div class="mb-3">
                <label for="contact-form" class="form-label">Last Name</label>
                <input type="name" class="form-control" id="last-name"></input>
            </div>

            <div class="mb-3">
                <label for="contact-form" class="form-label">Email address</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com"></input>
            </div>

            <div class="mb-3">
            <label for="contact-form" class="form-label">Select your preferred shoot location</label>

            <select class="form-select" aria-label="select dropdown">
                <option selected>Select from dropdown</option>
                <option value="1">Studio Portrait Shoot</option>
                <option value="2">Outdoor Portrait Shoot</option>
            </select>
            </div>

            <div class="mb-3">
                <label for="contact-form" class="form-label">Additional Comments</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="mb-3 text-center">
            <button type="button" class="btn btn-primary form-button">Submit</button>
            </div>

        </div>
    );

}

export default Contact;