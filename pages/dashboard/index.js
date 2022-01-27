import React from 'react';
import DashboardLayout from '../../components/Dashboard/DashboardLayout'
import DashboardNewsfeed from '../../components/Dashboard/DashboardNewsfeed'

function index() {
  return(
      <DashboardLayout>
          <DashboardNewsfeed />
      </DashboardLayout>
  )
}

export default index;
