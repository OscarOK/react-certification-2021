import React from 'react';
import NavBar from '../NavBar/NavBar.component';

function Layout({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <main className="container-fluid">{children}</main>
    </>
  );
}

export default Layout;
