import Link from 'next/link';
import React from 'react';
import { BellIcon, ChatIcon, HomeIcon, PlusIcon } from '@heroicons/react/solid'
import Settings from './Settings'

function DashboardNavbar() {
  return(
    <nav className='bg-blue-500/70 fixed w-full'>
      <div className='mx-2 lg:mx-auto max-w-screen-lg py-1'>
        <div className='flex text-center items-center'>
    
          <div className='flex flex-1 font-semibold'>
            <Link href='/'>
              <a>Social<span className='text-yellow-400'>Media</span></a>
            </Link>
          </div>

          {/* md:hidden */}
          <div className='flex space-x-2 md:space-x-4 text-yellow-400'>
            <PlusIcon role='button' className='h-5 w-5 drop-shadow-md' />
            <HomeIcon role='button' className='h-5 w-5 drop-shadow-md' />
            <ChatIcon role='button' className='h-5 w-5 drop-shadow-md' />
            <BellIcon role='button' className='h-5 w-5 drop-shadow-md' />
            <Settings />
          </div>

        </div>
      </div>
    </nav>
  )
}

export default DashboardNavbar;
