import React from 'react';
import '../Pages/Home/Project/Project.css'
import LazyLoad from 'react-lazyload';
import { AiOutlineLink } from 'react-icons/ai';
import { FaGithubSquare } from 'react-icons/fa';

const ProjectCard = ({ data }) => {
    return (
        <>
            <div className="glass project">
                <h3 className='text-center py-3 uppercase font-extrabold'>{data.project_name}</h3>
                <div className='relative'>
                    <LazyLoad><img src={data.img} alt={data.img} /></LazyLoad>
                    <div className="project_overlay flex items-center">
                        <div className='w-full'>
                            <a className='btn-primary 500 mt-2 py-2 font-bold text-xs gap-2 mx-auto text-white flex w-[50%] justify-center items-center rounded-lg' href={data.live_link} target='_blank'><AiOutlineLink className='text-lg text-black bg-white'></AiOutlineLink> Live Site Link</a>
                            <a className='btn-primary 500 mt-2 py-2 font-bold text-xs gap-2 mx-auto text-white flex w-[50%] justify-center items-center rounded-lg' href={data.client_side} target='_blank'><FaGithubSquare className='text-lg text-black bg-white'></FaGithubSquare> Client Side</a>
                            <a className='btn-primary 500 mt-2 py-2 font-bold text-xs gap-2 mx-auto text-white flex w-[50%] justify-center items-center rounded-lg' href={data.server_side} target='_blank'><FaGithubSquare className='text-lg text-black bg-white'></FaGithubSquare> Server Side</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectCard;