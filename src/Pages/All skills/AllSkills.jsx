import React from 'react';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiExpress, SiJsonwebtokens, SiReactrouter } from 'react-icons/si';
import { BiLogoFirebase, BiLogoMongodb, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader';

const AllSkills = () => {
    return (
        <div className='py-10'>
            <Container>
            <SectionHeader name={'All Skills'} />
            <div data-aos="zoom-in" className='grid md:grid-cols-3 grid-cols-2 lg:grid-cols-4 gap-4 mt-6'>
                <AiFillHtml5 className='text-9xl mx-auto text-[#f06529]'></AiFillHtml5>
                <BiLogoCss3 className='text-9xl mx-auto text-sky-500'></BiLogoCss3>
                <FaBootstrap className='text-9xl mx-auto text-[#0d6efd]'></FaBootstrap>
                <BiLogoTailwindCss className='text-9xl mx-auto text-sky-500'></BiLogoTailwindCss>
                <BiLogoJavascript className='text-9xl mx-auto text-[#f0db4f]'></BiLogoJavascript>
                <FaReact className='text-9xl mx-auto text-sky-500'></FaReact>
                <SiExpress className='text-9xl mx-auto text-black'></SiExpress>
                <BiLogoMongodb className='text-9xl mx-auto text-green-500'></BiLogoMongodb>
                <FaNode className='text-9xl mx-auto text-green-500'></FaNode>
                <BiLogoFirebase className='text-9xl mx-auto text-[#F5820D]'></BiLogoFirebase>
                <SiReactrouter className='text-9xl mx-auto'></SiReactrouter>
                <SiJsonwebtokens className='text-9xl mx-auto'></SiJsonwebtokens>
            </div>
        </Container>
        </div>
    );
};

export default AllSkills;