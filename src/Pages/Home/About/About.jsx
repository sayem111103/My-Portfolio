import React from 'react';
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';

const About = () => {
    return (
        <div className='pb-28'>
            <Container>
            <SectionHeader name={'about me'} />
            <div className='mt-6' data-aos="fade-up"  data-aos-duration="3000">
                <p className='text-justify font-thin md:font-md'>My name is <b>MD. SAYEM UL ISLAM</b>, and I am a <b className='capitalize'>junior web developer</b> with <b>nearly 7 months of learning experience</b>. I have acquired strong foundation in <strong>React.js, HTML, CSS, Bootstrap, Tailwind, JavaScript.</strong> Which is Essential for front-end Developer. I am familiar with <strong>Express.js, Node.js and MongoDB.</strong> I am also knowledgeable about authentication using <strong>Google Firebase</strong>. I am also knowledgeable about authorization using <strong>Json Web Token</strong> and proficient in utilizing various development tools.</p>

                <p className='mt-5 text-justify font-thin md:font-md'> As a web developer, I possess a strong passion for learning and continuously improving my skills. I am a quick learner, always eager to explore new technologies and stay up-to-date. I enjoy working on frontend development, <strong>creating Responsive and User-Friendly interfaces.</strong> Moreover, I am familiar with backend development using Express.js and Node.js, enabling me to <strong>build efficient and scalable web applications</strong>. I am enthusiastic about collaborating with teams, taking on challenges, and contributing to the development of innovative web projects.</p>
            </div>
        </Container>
        </div>
    );
};

export default About;