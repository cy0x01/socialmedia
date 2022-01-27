import React from 'react';
import MainNavbar from '../components/Main/MainNavbar'
import MainFooter from '../components/Main/MainFooter'

export default function Home() {
  return (
    <div className='flex flex-col'>   
      <MainNavbar />
      <main className='h-screen flex flex-col justify-center items-center'>
        <h1 className='font-bold text-xl'>SOCIAL <span className='text-yellow-400'>MEDIA</span></h1>
        <h4>by CySurigao</h4>
      </main>
      <section className='flex flex-col justify-center items-center text-center p-9 h-screen space-y-4'>
        <h1 className='font-semibold text-xl'>Hello</h1>
        <p className='text-sm'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <MainFooter />
    </div>
  )
}
