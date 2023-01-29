import AboutImg from '../../assets/Banner/banner_group.png';
import './about.styles.scss';

const About = () => {
  return (
    <div id='about'>
      <div className='grid w-full place-items-center bg-cover col-start-1 row-start-1 bg-center bg-base-200 py-10'>
        <div className='z-0 flex items-center justify-center max-w-screen-2xl gap-4 p-4 flex-col lg:flex-row-reverse'>
          <img
            src={AboutImg}
            alt='hero'
            className='aboutImg w-3/4 lg:w-1/2 rounded-lg shadow-2xl'
          />
          <div className='mr-10'>
            <span className='text-5xl text-red-600 font-[GodFather] hover:text-red-600 hover:text-7xl duration-200'>
              About Me
            </span>
            <br />
            <br />
            <h1 className='md:text-5xl lg:text-5xl text-2xl font-serif'>
              I/m Experienced Front-End Developer with over <br />
              <span className='md:text-5xl lg:text-6xl text-2xl text-red-600 font-[GodFather] font-thin'>
                2.5 years of experience.
              </span>
            </h1>
            <br />
            <p className='ру-6 text-sm 1g:text-lg md:text-lg font-mono'>
              A skilled front-end developer with 2.5 years of
              experience, I have a proven track record of creating
              high-performing, user-friendly websites and
              applications.
              <br /> <br />
              My expertise in HTML, CSS, JavaScript, and
              React.js(Hooks, Redux, Router), Express.js, Node.js,
              Webpack, Mongodb, Mongoose, Postman Api, Angular, Git,
              Mysql, Agile Methodology, JIRA, AWS(EC2, S3, Redis).
              <br />
              <br />
              That allows me to create responsive, dynamic websites
              and applications designs that enhance the user
              experience.
            </p>
            <a
              href='https://drive.google.com/drive/u/1/folders/19endx6b-Tw-uPQoFsrM7lEQOPXs01O-8'
              className='btn btn-accent mt-6'
              download='Jayant_Resume'
            >
              {' '}
              DownLoad Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
