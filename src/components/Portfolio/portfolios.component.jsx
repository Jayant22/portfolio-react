import projectOne from '../../assets/Portfolio Images/project_1.png';
import projectTwo from '../../assets/Portfolio Images/project_2.png';
import projectThree from '../../assets/Portfolio Images/project_3.png';
import projectFour from '../../assets/Portfolio Images/project_4.png';
import projectFive from '../../assets/Portfolio Images/project_6.png';
import projectSix from '../../assets/Portfolio Images/project_5.png';
import Portfolio from './portfolio.component';

const Portfolios = () => {
  const portfolios = [
    {
      image: projectOne,
      title: 'Crown eCommerce App',
      description:
        'A React-based e-commerce clothing site is an interactive online platform for buying and selling clothing.',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router',
      githubLink: 'https://github.com/Jayant22/Crown-eCommerce-App',
      liveLink: 'https://crown-ecommerce-app.pages.dev/',
    },
    {
      image: projectTwo,
      title: 'Portfolio Vito',
      description:
        'A React personal portfolio website is an interactive, digital representation of an individuals professional profile, created using React.',
      stack: 'React.js, Scss, Context API, Sanity IO',
      githubLink: 'https://github.com/Jayant22/portfolio-react',
      liveLink: 'https://portfolio-react-mu-livid.vercel.app/',
    },
    {
      image: projectThree,
      title: 'eCommerce App',
      description:
        'A React-based tech e-commerce site is an interactive online platform for buying and selling technology products.',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router, Redux, ',
      githubLink: 'https://github.com/Jayant22/eCommerce-App',
      liveLink: 'https://e-commerce-app-gray.vercel.app/',
    },
    {
      image: projectFour,
      title: 'youtube-Clone-Site',
      description:
        'YouTube clone site is an interactive platform that replicates the functionality of YouTube with some UI changes to differ from original.',
      stack:
        'React.js, Scss, Context API, React Router, React Redux, Rapid API',
      githubLink: 'https://github.com/Jayant22/youtube-clone-project',
      liveLink: 'https://youtube-clone-project-kappa.vercel.app/',
    },

    {
      image: projectFive,
      title: 'SKILLEX App',
      description:
        'A React-based educational site is an interactive online platform for that showcase the details and info of SKILLEX site.',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router, Framer Motion ',
      githubLink: 'https://github.com/Jayant22/education-website',
      liveLink: 'https://education-website-steel.vercel.app/',
    },
    {
      image: projectSix,
      title: 'Spline Project App',
      description:
        'A React-based tech 3D Spline Design site is an interactive online platform.',
      stack:
        'React.js, Scss, Firebase API, Context API, React Router',
      githubLink: 'https://github.com/Jayant22/spline-3D-Design',
      liveLink: 'https://spline-3-d-design.vercel.app/',
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
