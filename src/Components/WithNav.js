import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router';
export default () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
