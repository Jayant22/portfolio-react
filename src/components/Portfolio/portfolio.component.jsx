import './portfolio.styles.scss';

const Portfolio = ({ portfolio }) => {
  const { title, image, description, stack, githubLink, liveLink } =
    portfolio;
  return (
    <div className='portfolio-container flex items-center justify-center'>
      <div className='card w-11/12 lg:w-98 bg-base-100 shadow-xl glass'>
        <figure>
          <img src={image} alt='PorjectOne' className='w-auto' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{title}</h2>
          <p>{description}</p>
          <div>
            <h3>Tech Stack: </h3>
            {stack.split(',').map((str, i) => (
              <div
                className='badge badge-info mx-2 font-[monospace] font-bold lg:text-lg md:text-lsm sm:text-sm'
                key={i}
              >
                {str}
              </div>
            ))}
          </div>
          <br />
          <div className='card-actions justify-end'>
            <a href={githubLink} className='btn btn-accent'>
              <span className='text-xl sm:text-lg text-red-600 font-[Shadows] font-bold'>
                GtiHub Link
              </span>
            </a>
            <a href={liveLink} className='btn btn-accent'>
              <span className='text-lg text-red-600 font-[Shadows] font-bold'>
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
