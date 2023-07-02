import React, { useRef } from 'react';
import Container from '../../components/Container';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import SectionHeader from '../../components/SectionHeader';

const ContactMe = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${import.meta.env.VITE_EMAIL_SERVICE_ID}`, `${import.meta.env.VITE_EMAIL_TEMPLATE_KEY}`, form.current, `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`)
            .then((result) => {
                if (result.text === "OK") {
                    Swal.fire(
                        '',
                        'Email has been send',
                        'success'
                    )
                    e.target.reset()
                }
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='py-20'>
            <SectionHeader name={"contact me"} />
            <Container>
                <div className="hero mt-6" data-aos="fade-up" >
                    <form className="card gap-3 flex-shrink-0 w-full md:w-[75%] shadow-2xl bg-base-100" ref={form} onSubmit={sendEmail}>
                        <div className='lg:flex gap-6'>
                            <div className="form-control lg:w-[50%]">
                                <label className='mb-2'>Name</label>
                                <input required className="input border-black" type="text" name="user_name" />
                            </div>
                            <div className="form-control lg:w-[50%]">
                                <label className='mb-2'>Email</label>
                                <input required className="input border-black" type="email" name="user_email" />
                            </div>
                        </div>
                        <label>Message</label>
                        <div className="form-control">
                            <textarea required className="input px-3 py-3 h-36 border-black" name="message" />
                        </div>
                        <input className='btn btn-primary text-white mt-3' type="submit" value="Send" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default ContactMe;