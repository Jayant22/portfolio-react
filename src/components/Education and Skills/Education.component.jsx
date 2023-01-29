import { FaUniversity } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const Education = () => {
  return (
    <div>
      <h1 className='text-6xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-8xl duration-200'>
        Education
      </h1>
      <div className='hover:text-red-600 hover:text-xl duration-200'>
        <IconContext.Provider value={{ size: '3rem' }}>
          <div className='flex items-center justify-center gap-5'>
            <figure>
              <i>
                <FaUniversity />
              </i>
            </figure>
            <div className='card-body'>
              <h1 className='card-title text-7xl font-[GodFather] font-extralight'>
                N.K Orchid College of Engg And Tech.
              </h1>
              <h2 className='card-title text-lg'>
                B.Tech in Computer Science Engg
              </h2>
              <h2 className='card-title text-lg'>
                Grad. May 2020 | Maharashtra, IN
              </h2>
              <p>
                Object Oriented Programming Analysis and Design of
                Algorithms Data Structures and Algorithms Data
                Structures R-DBMS Object Oriented Software Engineering
                Unix Tools and Scripting
              </p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Education;
