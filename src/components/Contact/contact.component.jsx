const Contact = () => {
  return (
    <div id='contact'>
      <div className='w-9/12 flex flex-col items-center justify-center m-auto py-10'>
        <div>
          <h1 className='text-6xl text-red-600 font-[GodFather] font-light text-center mt-20'>Contact Me</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 w-full'>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>First Name</span>
            </label>
            <input type='text' placeholder='First Name' className='input input-bordered' />
          </div>
          <div className='form-control'>
            <label className='label'>
              <span className='label-text'>Last Name</span>
            </label>
            <input type='text' placeholder='Last Name' className='input input-bordered' />
          </div>
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input type='text' placeholder='Email' className='input input-bordered' />
        </div>
        <div className='form-control w-full'>
          <label className='label'>
            <span className='label-text'>Write a Message</span>
          </label>
          <textarea type='text' placeholder='Write Your Message Here' className='input input-bordered h-20' />
        </div>
        <div className='form-control mt-6 w-full'>
          <button className='btn btn-accent'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
