const Stats = () => {
  return (
    <div className='flex flex-col items-center justify-center py-10'>
      <div className='stats shadow stats-vertical lg:stats-horizontal '>
        <div className='stat place-items-center'>
          <div className='stat-title'>Work Experience</div>
          <div className='stat-value'>2.5+ Years</div>
          <div className='stat-desc'>From May 2020 to Present</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>Projects Completed</div>
          <div className='stat-value'>20</div>
          <div className='stat-desc'>From May 2020 to Present</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>Hours Completed</div>
          <div className='stat-value'>1000+</div>
          <div className='stat-desc'>From May 2020 to Present</div>
        </div>
        <div className='stat place-items-center'>
          <div className='stat-title'>Company Work Completed</div>
          <div className='stat-value'>15+ Features</div>
          <div className='stat-desc'>From March 2021 to Present</div>
        </div>

        <div className='stat place-items-center'>
          <div className='stat-title'>Users Served</div>
          <div className='stat-value'>1000</div>
          <div className='stat-desc'>From March 2020 to Present</div>
        </div>
        {/* <div className='stat place-items-center'>
          <div className='stat-title'>SEO Optimized</div>
          <div className='stat-value'>60</div>
          <div className='stat-desc'>↗︎ 10 (20%)</div>
        </div> */}
      </div>
    </div>
  );
};

export default Stats;
