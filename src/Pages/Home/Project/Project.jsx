import React, { useEffect, useState } from 'react';
import ProjectCard from '../../../components/ProjectCard';
import Container from '../../../components/Container';
import SectionHeader from '../../../components/SectionHeader';
import './Project.css'

const Project = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    // console.log(projects);
    return (
        <div className='pt-20'>
            <SectionHeader name={'My Projects'}/>
            <Container>
                <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 flex-wrap gap-4'>
                    {projects?.slice(0,3).map((pd) => <ProjectCard key={pd._id} data={pd}></ProjectCard>)}
                </div>
            </Container>
        </div>
    );
};

export default Project;