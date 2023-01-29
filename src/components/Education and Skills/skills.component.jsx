import './skills.styles.scss';

const Skills = () => {
  const experiencedSkills = [
    {
      skill: 'HTML',
      value: 80,
    },
    {
      skill: 'SCSS ( CSS Preprocessor )',
      value: 70,
    },
    {
      skill: 'JavaScript ( ES6 )',
      value: 80,
    },
    {
      skill: 'React.js ( Hooks, Redux, Routing )',
      value: 75,
    },
    {
      skill: 'Tailwind CSS',
      value: 60,
    },
    {
      skill: 'Node.js ( Express.js )',
      value: 65,
    },
    {
      skill: 'MongoDB ( Mongoose )',
      value: 50,
    },
  ];

  const intermediateSkills = [
    {
      skill: 'TypeScript',
      value: 60,
    },
    {
      skill: 'Java',
      value: 80,
    },
    {
      skill: 'Cloud Services ( AWS )',
      value: 55,
    },
    {
      skill: 'Agile Methodology - SCRUM',
      value: 65,
    },
    {
      skill: 'Jest',
      value: 50,
    },
    {
      skill: 'Postman API',
      value: 60,
    },
    {
      skill: 'Vite and Webpack',
      value: 65,
    },
  ];

  return (
    <div>
      <h1 className='text-6xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-8xl duration-200'>
        Skills
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-3'>
        <div className='flex flex-col gap-5 mx-5'>
          <h1 className='text-4xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-6xl duration-200'>
            Experienced
          </h1>

          <div>
            {experiencedSkills.map((skill, i) => (
              <div key={i} className='skill'>
                <h3 className='text-3xl text-red-600 font-[Shadows] font-light my-3 hover:text-red-600 hover:text-4xl duration-200'>
                  {skill.skill}
                </h3>
                <progress
                  className='progress progress-accent w-full'
                  value={skill.value}
                  max='100'
                ></progress>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-5 mx-5'>
            <h1 className='text-4xl text-red-600 font-[GodFather] font-light text-center mt-20 hover:text-red-600 hover:text-6xl duration-200'>
              Intermediate
            </h1>
            <div>
              {intermediateSkills.map((skill, i) => (
                <div key={i} className='skill'>
                  <h3 className='text-3xl text-red-600 font-[Shadows] font-light my-3 hover:text-red-600 hover:text-4xl duration-200'>
                    {skill.skill}
                  </h3>
                  <progress
                    className='progress progress-accent w-full'
                    value={skill.value}
                    max='100'
                  ></progress>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
