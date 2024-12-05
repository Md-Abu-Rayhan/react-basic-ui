import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function Layout() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/login') {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      {location.pathname !== '/login' && <Footer />}
    </>
  );
}

export default Layout;