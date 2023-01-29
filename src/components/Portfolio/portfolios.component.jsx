import projectOne from '../../assets/Portfolio Images/project_1.png';
import projectTwo from '../../assets/Portfolio Images/project_2.png';
import projectThree from '../../assets/Portfolio Images/project_3.png';
import Portfolio from './portfolio.component';

const Portfolios = () => {
  const portfolios = [
    {
      image: projectOne,
      title: 'Crown eCommerce App',
      description: 'lorem',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router',
      githubLink: 'https://github.com/Jayant22/Crown-eCommerce-App',
      liveLink: 'https://crown-ecommerce-app.pages.dev/',
    },
    {
      image: projectTwo,
      title: 'Portfolio Vito',
      description: 'lorem',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router',
      githubLink: 'https://github.com/Jayant22/portfolio-react',
      liveLink: 'https://crown-ecommerce-app.pages.dev/',
    },
    {
      image: projectThree,
      title: 'eCommerce App',
      description: 'lorem',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router',
      githubLink: 'https://github.com/Jayant22/eCommerce-App',
      liveLink: 'https://crown-ecommerce-app.pages.dev/',
    },
  ];

  return (
    <div id='portfolio'>
      <h1 className='text-6xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-8xl duration-200'>
        Portfolios
      </h1>
      <div className='lg:flex lg:items-center lg:justify-between lg:py-10'>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 py-3'>
          {portfolios.map((portfolio, i) => (
            <Portfolio key={i} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolios;
