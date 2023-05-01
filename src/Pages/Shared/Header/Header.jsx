import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Bars4Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user,logOut } = useContext(AuthContext)
    // console.log(user?.photoURL);

    const handleLogOUt =()=>{
        logOut()
        .then(()=>{
            console.log('logOut Successfully');
        })
        .catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className='bg-lime-600'>
            <div className=' py-5 mx-auto sm:max-w-full md:max-w-full lg:max-w-screen-xl lg:px-8 '>
                <div className='relative flex items-center justify-between'>
                    <div className='font-bold text-3xl text-violet-800'>Food Mart</div>
                    <ul className='items-center hidden space-x-8 lg:flex'>
                        <li>
                            <NavLink
                                to='/'
                                aria-label='Home'
                                title='Home'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                aria-label='About Us'
                                title='About Us'
                                className={({ isActive }) => (isActive ? 'active' : 'default')}
                            >
                                Blog
                            </NavLink>
                        </li>
                        {
                            user &&
                            <div className="w-10 rounded-full tooltip tooltip-bottom"  data-tip={user.displayName}>
                                <img src={user.photoURL} className='rounded-full' alt="" />
                            </div>
                        }
                       {
                        user ?  <Link to='/login' className='hidden lg:block'>
                        <button className='btn-primary' onClick={handleLogOUt}>logOut</button>
                    </Link> :  <Link to='/login' className='hidden lg:block'>
                            <button className='btn-primary'>Login</button>
                        </Link>
                       }

                    </ul>

                    {/* Mobile responsive */}
                    <div className='lg:hidden'>
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars4Icon className='w-6 h-7'></Bars4Icon>
                        </button>
                        {
                            isMenuOpen && (
                                <div className='absolute z-10 top-0 left-0 w-full'>
                                    <div className='p-5 bg-white border rounded shadow-sm'>
                                        <div className='flex items-center justify-between mb-4'>
                                            <div>
                                                <h1 className='font-bold text-2xl text-violet-800'>Food Mart</h1>
                                            </div>
                                            <div>
                                                <button
                                                    aria-label='Close Menu'
                                                    title='Close Menu'
                                                    className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                                                    onClick={() => setIsMenuOpen(false)}
                                                >

                                                    <XMarkIcon className='h-6 w-6'></XMarkIcon>
                                                </button>
                                            </div>
                                        </div>
                                        <nav>
                                            <ul className='space-y-4'>
                                                <li>
                                                    <Link
                                                        to='/'
                                                        aria-label='Home'
                                                        title='Home'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Home
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link
                                                        to='/blog'
                                                        aria-label='Statistics'
                                                        title='Statistics'
                                                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400'
                                                    >
                                                        Blog
                                                    </Link>
                                                </li>

                                                {
                                                    user ? <li>
                                                        <button className='btn-primary '>LogOut</button>
                                                    </li> : 
                                                    <li>
                                                        <button className='btn-primary '>LogOut</button>
                                                    </li>
                                                }

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;