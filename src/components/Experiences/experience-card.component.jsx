import { IconContext } from 'react-icons';

const ExperienceCard = ({ experience }) => {
  const { icon, jobTitle, companyName, description, duration } = experience;
  return (
    <div>
      <div className='hover:text-red-600 hover:text-xl duration-200'>
        <IconContext.Provider value={{ size: '3rem' }}>
          <div className='flex items-center justify-center'>
            <figure>
              <i>{icon}</i>
            </figure>
            <div className='card-body'>
              <h1 className='card-title text-6xl font-[GodFather] font-extralight'>{companyName}</h1>
              <h2 className='card-title text-lg'>{jobTitle}</h2>
              <h2 className='card-title text-lg'>{duration}</h2>
              <div>
                {description.split('\n').map((str, i) => (
                  <p key={i}>{str}</p>
                ))}
              </div>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default ExperienceCard;
