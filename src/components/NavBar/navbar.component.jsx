import { Fragment } from 'react';
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';

const Navbar = () => {
  const navItems = (
    <Fragment>
      <li>
        <Link
          activeClass='active'
          to='about'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          activeClass='active'
          to='service'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Service
        </Link>
      </li>
      <li>
        <Link
          activeClass='active'
          to='portfolio'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          activeClass='active'
          to='contact'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={100}
        >
          Contact Me
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {navItems}
          </ul>
        </div>
        <a
          href='/'
          className='btn btn-ghost font-normal normal-case text-4xl text-red-500 font-[GodFather]'
        >
          Jayant_Kodam
        </a>
      </div>
      <div className='navbar-end hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
