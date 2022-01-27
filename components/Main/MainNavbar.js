import Link from 'next/link';
import React from 'react';
import { MenuIcon } from '@heroicons/react/solid'
import ThemeSwitcher from '../ThemeSwitcher'

function MainNavbar() {
  return(
    <nav className='bg-blue-500/70 fixed w-full'>
      <div className='mx-2 lg:mx-auto max-w-screen-lg py-1'>

        <div className='flex flex-wrap text-center items-center'>
          
          <div className='flex flex-1 font-semibold'>
            <Link href='/'>
              <a>Social<span className='text-yellow-400'>Media</span></a>
            </Link>
          </div>

         <div className='flex space-x-2 md:space-x-4 '>
            <ThemeSwitcher />
            <div className='flex md:hidden'>
              <MenuIcon role='button' className='h-6 w-6 text-yellow-400 drop-shadow-md' />
            </div>
         </div>
         
          {/* hidden */}
          <div className='text-sm font-semibold w-full md:w-auto px-2  space-x-2 space-y-2 md:space-y-0 my-2 flex-wrap md:flex'>
            <div className='space-x-2 space-y-2 md:space-y-0 flex flex-wrap w-full md:w-auto'>
              <Link href='/'>
                <a className='w-full md:w-auto p-1 rounded hover:bg-yellow-200 hover:text-gray-900'>Home</a>
              </Link>
              <Link href='/dashboard'>
                <a className='w-full md:w-auto p-1 rounded hover:bg-yellow-200 hover:text-gray-900'>Dashboard</a>
              </Link>
              {/* Login */}
              <Link href='/test'>
                <a className='w-full md:w-auto p-1 rounded hover:bg-yellow-200 hover:text-gray-900'>Login</a>
              </Link>
              {/* Signup */}
              {/* active background color signup */}
              <Link href='/test'>
                <a className='w-full md:w-auto p-1 rounded bg-yellow-200 text-gray-900'>Signup</a>
              </Link>
              {/* Logout */}
              <Link href='/test'>
                <a className='hidden w-full md:w-auto p-1 rounded bg-yellow-200 hover:text-gray-900'>Logout</a>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </nav>
  )
}

export default MainNavbar;
