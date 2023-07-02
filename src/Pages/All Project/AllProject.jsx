import React, { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Container from '../../components/Container';
import SectionHeader from '../../components/SectionHeader';

const AllProject = () => {
    const [allprojects, setAllProjects] = useState();
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setAllProjects(data))
    }, [])
    return (
        <div className='py-20'>
            <Container>
            <SectionHeader name={'All Project'} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 flex-wrap gap-4'>
                {allprojects?.map((apd) => <ProjectCard key={apd._id} data={apd}></ProjectCard>)}
            </div>
        </Container>
        </div>
    );
};

export default AllProject;