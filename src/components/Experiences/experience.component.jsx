import { SiHcl } from 'react-icons/si';
import { CgOrganisation } from 'react-icons/cg';
import ExperienceCard from './experience-card.component';
const Experience = () => {
  const experiences = [
    {
      icon: <SiHcl></SiHcl>,
      companyName: 'HCL Technologies',
      jobTitle: 'Front-end Developer',
      duration: 'March 2021 - Present',
      description: `• 2 years of experience in System Analysis, Design and Development, Production Support, and Maintenance of Production Applications across all 3 regions (APAC, EMEA, and AMER).
        \n• Strengthened the Application Processes, Identified enhancements, and Root Cause Analysis of bug and development requirements.
        \n• Reduced the manual efforts of the Ops team by 40% by automating the Reconciliation Jobs by using SDLC Principles.
        \n• Implemented React applications while managing the State through Hooks, Redux, and Asynchronous Redux using Redux Thunk saves 2+ hours of the user's time.
        \n• Developed the Backend API Server with Node.js and Express.js in 100% accordance with industry and company standards tested on Postman API.<br />
        \n• Enhanced user experience by 20% with React Hooks & Redux, RESTFul Web Service, tested on Jest.<br />
        \n• Designed and integrated a database using MongoDB that leveraged the React architecture to yield on-demand, detailed feedback.<br />
        \n• Involved in SDLC, participated in Scrum meetings and Used JIRA to track the project's progress.<br />
        \n• Production batch support includes monitoring batch on a rotational basis, user support, on-call support, job failure analysis, and process management.<br />
        \n• Worked on creating the Confidential scripts and scheduling the Confidential jobs using Shell Scripting, Oracle SQL, and Java.<br />
        \n• Tech Stack: HTML5, CSS, JavaScript, Java, React.js, Nodejs, Express.js, Webpack, UNIX Shell Scripting, Jest, Vite, AWS: EC2, S3 & Redis.<br />
        \n• Database: MongoDB, MySQL, Oracle 12c (SQL, PL/SQL).`,
    },
    {
      icon: <CgOrganisation></CgOrganisation>,
      companyName: 'NexSales Solutions',
      jobTitle: 'Front-end Developer',
      duration: 'May 2020 - Feb 2021',
      description: `• Software Development experience with React.js, Angular10, Java, MVC, Express.js, Node.js, Webpack, MongoDB, and Mongoose.
        \n• Implemented React applications using React Hooks, Redux, and Asynchronous Redux.
        \n• Tech Stack: HTML5, CSS, JavaScript, React.js, Nodejs, Express.js, Webpack, Jest.`,
    },
  ];
  return (
    <div id='experience'>
      <h1 className='text-6xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-8xl duration-200'>
        Experience
      </h1>
      <div className='grid grid-cols-1 gap-5 py-3'>
        {experiences.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
