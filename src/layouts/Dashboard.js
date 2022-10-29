import React from 'react'
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
        <div /* layout props & styling */ >
            {/* local layout UI */}
            <h1>Dashboard Layout</h1>
            <Outlet /> 
        </div>
    </>
  )
}

export default Dashboard