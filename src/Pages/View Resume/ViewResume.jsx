import React from 'react';
import Container from '../../components/Container';

const ViewResume = () => {
    return (
        <div className='py-10'>
            <Container>
                <div>
                    <embed src='https://drive.google.com/file/d/1HPUQfkdiSAvoX5PEppz_e-PkRTQF0ZBB/preview' width="100%" height="500px" type='application/pdf'></embed>
                </div>
                <div className='text-center my-4'>
                    <a download href="https://drive.google.com/u/0/uc?id=1HPUQfkdiSAvoX5PEppz_e-PkRTQF0ZBB&export=download" target='_blank'><button className='btn btn-primary btn-sm md:btn-md text-white'>Download Resume</button></a>
                </div>
            </Container>
        </div>
    );
};

export default ViewResume;