import React from 'react'
import { Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <div /* layout props & styling */ >
            {/* local layout UI */}
            <h1>Home Layout</h1>
            <Outlet /> 
        </div>
    </>
  )
}

export default Home