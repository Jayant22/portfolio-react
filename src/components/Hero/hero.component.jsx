import HeroImage from '../../assets/AboutMe/AboutMe.png';
import Typewriter from 'typewriter-effect';

import './hero.styles.scss';
const Hero = () => {
  return (
    <div className='grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 py-10'>
      <div className='z-0 flex items-center justify-center max-w-screen-2xl gap-4 p-4 flex-col lg:flex-row-reverse'>
        <img
          src={HeroImage}
          alt='hero'
          className='heroImg w-3/4 lg:w-1/2 rounded-lg shadow-2xl'
        />
        <div className='mr-10'>
          <h1 className='md:text-9xl lg:text-9xl text-5xl font-[GodFather] '>
            {' '}
            Hello! <br></br> I am{' '}
            <span className='text-red-600'>
              <Typewriter
                options={{
                  strings: ['Jayant Kodam', 'A Full Stack Developer'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>
          <br />
          <p className='ру-6 text-sm 1g:text-lg md:text-lg font-mono'>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web
            services and online stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
