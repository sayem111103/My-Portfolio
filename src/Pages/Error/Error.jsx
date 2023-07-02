import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Error = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <Player
                autoplay
                loop
                src="https://assets1.lottiefiles.com/private_files/lf30_tonsVH.json"
                className='md:h-[500px] md:w-[500px] h-70 w-70'
            >
            </Player>
        </div>
    );
};

export default Error;