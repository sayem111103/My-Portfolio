import React from 'react';
import Marquee from 'react-fast-marquee';
import { FaReact, FaBootstrap, FaNode } from 'react-icons/fa';
import { AiFillHtml5 } from 'react-icons/ai';
import { SiExpress, SiJsonwebtokens, SiReactrouter } from 'react-icons/si';
import { BiLogoFirebase, BiLogoMongodb, BiLogoCss3, BiLogoTailwindCss, BiLogoJavascript } from 'react-icons/bi';
import SectionHeader from '../../../components/SectionHeader';
import Container from '../../../components/Container';

const Skills = () => {
    return (
        <Container>
            <div>
                <SectionHeader name={'My Skills'} />
                <div className='py-10'>
                    <Marquee gradient>
                        <AiFillHtml5 className='text-8xl mx-3 text-[#f06529]'></AiFillHtml5>
                        <BiLogoCss3 className='text-8xl mx-3 text-sky-500'></BiLogoCss3>
                        <FaBootstrap className='text-8xl mx-3 text-[#0d6efd]'></FaBootstrap>
                        <BiLogoTailwindCss className='text-8xl mx-3 text-sky-500'></BiLogoTailwindCss>
                        <BiLogoJavascript className='text-8xl mx-3 text-[#f0db4f]'></BiLogoJavascript>
                        <FaReact className='text-8xl mx-3 text-sky-500'></FaReact>
                        <SiExpress className='text-8xl mx-3 text-black'></SiExpress>
                        <BiLogoMongodb className='text-8xl mx-3 text-green-500'></BiLogoMongodb>
                        <FaNode className='text-8xl mx-3 text-green-500'></FaNode>
                        <BiLogoFirebase className='text-8xl mx-3 text-[#F5820D]'></BiLogoFirebase>
                        <SiReactrouter className='text-8xl mx-3'></SiReactrouter>
                        <SiJsonwebtokens className='text-8xl mx-3'></SiJsonwebtokens>
                    </Marquee>
                </div>
            </div>
        </Container>
    );
};

export default Skills;