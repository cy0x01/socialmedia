import React from 'react';
import DashboardNavbar from './Navbar/DashboardNavbar';
import DashboardFooter from './DashboardFooter';


function DashboardLayout({children}) {
  return(
    <div className='flex flex-col'>
        <DashboardNavbar />
        <main className='mt-12 mx-2 mb-4 lg:mx-auto max-w-screen-lg flex flex-col'>
          {children}
        </main>
        <DashboardFooter />
    </div>
  )
}

export default DashboardLayout;
