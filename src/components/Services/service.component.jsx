import { IconContext } from 'react-icons';
import './service.styles.scss';

const Service = ({ service }) => {
  const { icon, title, description } = service;
  return (
    <div>
      <div className='w-11/12 m-auto 1g:w-full'>
        <IconContext.Provider value={{ size: '3rem' }}>
          <div className='service-card'>
            <i>{icon}</i>
            <h3 className='py-3 font-bold'>{title}</h3>
            <p>{description}</p>
          </div>
        </IconContext.Provider>
      </div>
    </div>
  );
};
export default Service;
