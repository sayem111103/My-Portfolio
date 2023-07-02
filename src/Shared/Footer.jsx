import React from 'react';
import ActiveLink from '../components/ActiveLink';
import { BsFacebook, BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    const navItem = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li>
            <ActiveLink to='/about'>About Me</ActiveLink>
        </li>
        <li><ActiveLink to='/projects'>Projects</ActiveLink></li>
        <li><ActiveLink to='/resume'>View Resume</ActiveLink></li>
        <li><ActiveLink to='/skills'>Skills</ActiveLink></li>
        <li><ActiveLink to='/contact'>Contact me</ActiveLink></li>
    </>
    return (
        <footer className="footer footer-center p-10 bg-base-200">
            <div>
                <p className="font-bold">
                    MSUI. <br />
                </p>
                <ul className='flex flex-wrap justify-center gap-4'>
                    {navItem}
                </ul>
                <div>
                    <div className="grid grid-flow-col gap-4 mt-5">
                        <a href='https://www.facebook.com/sayem111103/' target='_blank'><BsFacebook className='text-4xl text-blue-600'></BsFacebook></a>
                        <a href='https://github.com/sayem111103' target='_blank'><BsGithub className='text-4xl text-white bg-black rounded-[55%] border-none'></BsGithub></a>
                        <a><BsLinkedin className='text-4xl text-blue-600'></BsLinkedin></a>
                    </div>
                </div>
                <p className='mt-10'>Copyright © 2023 - All right reserved By <strong className='text-primary'>SAYEM</strong></p>
            </div>
        </footer>
    );
};

export default Footer;