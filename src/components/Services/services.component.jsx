import { FaMobileAlt, FaDesktop, FaDove, FaEuroSign, FaHeadset, FaHospitalUser } from 'react-icons/fa';
import Service from './service.component';

const Services = () => {
  const services = [
    {
      icon: <FaDesktop className=''></FaDesktop>,
      title: 'Web Development',
      description: 'We will handle your Web come to life and maintain it through the lifecycle',
    },
    {
      icon: <FaMobileAlt className=''></FaMobileAlt>,
      title: 'Mobile Web-App Development',
      description: 'Have a Web-App in mind? I will make your vision come to life',
    },
    {
      icon: <FaDove className=''></FaDove>,
      title: 'Fast Service',
      description: 'Tired of Waiting? Not in here! Everything is done in a matter of minutes',
    },
    {
      icon: <FaEuroSign className=''></FaEuroSign>,
      title: 'Value for Money',
      description: 'Why pay high price when I can offer you a fair price',
    },
    {
      icon: <FaHeadset className=''></FaHeadset>,
      title: '24/7 Support',
      description: 'Website not working and who are you going to find at this hour?? Me Bro... Me',
    },
    {
      icon: <FaHospitalUser className=''></FaHospitalUser>,
      title: 'Friendly Service',
      description: 'Feeling lonely in your journey to make a website for your business? I am here bro',
    },
  ];

  return (
    <div id='service'>
      <h1 className='text-2xl text-red-600 font-[monospace] font-bold text-center mt-20'>Services</h1>
      <div className='lg:flex lg:items-center lg:justify-between lg:py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-5 py-3'>
          {services.map((service, i) => (
            <Service key={i} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
