import React from 'react';

const SectionHeader = ({name}) => {
    return (
        <>
            <h2 className='uppercase text-center text-xl md:text-4xl font-bold'>{name}</h2>
        </>
    );
};

export default SectionHeader;