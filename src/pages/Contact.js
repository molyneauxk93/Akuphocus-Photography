import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('', '', form.current, '')
            .then((result) => {
                console.log(result.text);
                window.location.reload();
            }, (error) => {
                console.log(error.text);
                window.location.reload();
            });

    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div>

                <p className="contact-me">Let's make this happen! Fill out the form below and I will be in touch with your to schedule your photoshoot! Please add any additional details you want to include in regards to your desired photoshoot! Thanks for choosing Akuphocus!</p>

                <div class="mb-3">
                    <label for="contact-form" class="form-label">First Name</label>
                    <input type="name" class="form-control" id="first-name" name="first_name"></input>
                </div>

                <div class="mb-3">
                    <label for="contact-form" class="form-label">Last Name</label>
                    <input type="name" class="form-control" id="last-name" name="last_name"></input>
                </div>

                <div class="mb-3">
                    <label for="contact-form" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="name@example.com" name="email"></input>
                </div>

                <div class="mb-3">
                    <label for="contact-form" class="form-label">Select your preferred shoot location</label>

                    <select class="form-select" aria-label="select dropdown" name="form_select">
                        <option selected>Select from dropdown</option>
                        <option value="Studio Portrait Shoot">Studio Portrait Shoot</option>
                        <option value="Outdoor Portrait Shoot">Outdoor Portrait Shoot</option>
                    </select>
                </div>

                <div class="mb-3">
                    <label for="contact-form" class="form-label">Additional Comments</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="additional_comments"></textarea>
                </div>

                <div class="mb-3 text-center">
                    <button type="submit" class="btn btn-primary form-button">Submit</button>
                </div>

            </div>
        </form>
    );

}

export default Contact;