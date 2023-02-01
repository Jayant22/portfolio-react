import './portfolio.styles.scss';

const Portfolio = ({ portfolio }) => {
  const { title, image, description, stack, githubLink, liveLink } =
    portfolio;
  return (
    <div className='portfolio-container flex items-center justify-center'>
      <div className='lg:w-98 card glass w-11/12 bg-base-100 shadow-xl'>
        <figure>
          <img src={image} alt='Porject_image' className='w-auto' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div>
            <h3>Tech Stack: </h3>
            {stack.split(',').map((str, i) => (
              <div
                className='badge-info badge mx-2 font-[monospace] font-bold sm:text-sm md:text-sm lg:text-lg'
                key={i}
              >
                {str}
              </div>
            ))}
          </div>
          <br />
          <div className='card-actions justify-end'>
            <a href={githubLink} className='btn-accent btn'>
              <span className='font-[Shadows] text-xl font-bold text-red-600 sm:text-lg'>
                GtiHub Link
              </span>
            </a>
            <a href={liveLink} className='btn-accent btn'>
              <span className='font-[Shadows] text-lg font-bold text-red-600'>
                Live Link
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
