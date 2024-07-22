import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner';
import GitHubIcon from '../../assets/GitHubIcon.png';
import LinkedInIcon from '../../assets/LinkedInIcon.png';
import './contact.css';

const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {

        e.preventDefault();

        const formName = form.current.querySelector('.name').value;
        const formEmail = form.current.querySelector('.email').value;
        const formMessage = form.current.querySelector('.message').value;

        if (formName !== '' && formEmail !== '' && formMessage !== '') {
            emailjs.sendForm('service_82dmeya', 'template_2mqbge9', form.current, 'Z2LXx6GkWrFVN0D58')
                .then((result) => {
                    e.target.reset();
                    toast.success("Email Sent Successfully!");
                }, (error) => {
                    toast.error("Oopsie!" + error.text);
                });
        } else {
            toast.warning("Something is missing!!, you must fill in every entry before sending it.");
        }
    };

    return (
        <section id="contact">
            <h1 className="contactTitle">Would you like to contact me?</h1>
            <span className="contactDescription">In case you have any questions, you may write them down below</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Your name please." name='your_name'/>
                <input type="email" className="email" placeholder="Your email please." name='your_email'/>
                <textarea className="message" name="message" rows="5" placeholder="I'm listening..."/>
                <button type="submit" value="Send!" className="submitBtn">Submit</button>
                <Toaster richColors />
                <div className="links">
                    <a href="https://github.com/DeibiU" className="iconLink"><img src={GitHubIcon} alt="GitHub" className="link"/></a>
                    <a href="https://www.linkedin.com/in/david-huertas-lafuente-17b39b280/" className="iconLink"><img src={LinkedInIcon} alt="LinkedIn" className="link" /></a>
                </div>
            </form>
        </section>
    );

}

export default Contact