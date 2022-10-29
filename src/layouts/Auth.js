import React from 'react'
import { Outlet } from 'react-router-dom';

const Auth = () => {
  return (
    <div /* layout props & styling */ >
        {/* local layout UI */}
        <h1>Auth Layout</h1>
        <Outlet /> 
    </div>
  )
}

export default Auth