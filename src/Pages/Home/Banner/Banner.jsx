import Container from '../../../components/Container';
import { Player } from '@lottiefiles/react-lottie-player';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    // const { onEnter, onLeave } = useContext(mouse_context);
    return (
        <Container>
            <div data-aos="fade-up" className='py-3 lg:flex flex-wrap items-center justify-between'>
                <div className='text-center md:text-left'>
                    <div className='uppercase'>
                        <h3 className='text-md md:text-4xl'>
                            Hello,
                        </h3>
                        <span className="text-xl md:text-4xl block">
                            I'm Sayem,</span>
                        <TypeAnimation className="text-xl md:text-4xl text-purple-500 "
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'a MERN Developer',
                                1000,
                                'a Web Developer',
                                1000,
                                'a Front-end Developer',
                                1000,
                                'a React Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ display: 'inline-block' }}
                            repeat={Infinity}
                        />
                    </div>
                    <a download href='https://drive.google.com/u/0/uc?id=1HPUQfkdiSAvoX5PEppz_e-PkRTQF0ZBB&export=download' target='_blank' className='mt-4 block'>
                        <button className='btn btn-primary btn-sm md:btn-md focus:outline-none text-white'>Download Resume</button>
                    </a>
                </div>
                <div data-aos-duration="3000">
                    <Player
                        autoplay
                        loop
                        src="https://assets9.lottiefiles.com/private_files/lf30_igfaivqx.json"
                        className='md:h-[500px] md:w-[500px] h-72 w-72'
                    >
                    </Player>
                </div>
            </div>
        </Container>
    );
};

export default Banner;