

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // تأكد من استيراد Bootstrap CSS
import { Container } from 'react-bootstrap'; // استيراد Container من react-bootstrap
import { Link } from 'react-router';

function Navbar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">


      <Container>
        <Link  to='/' className="navbar-brand ">Home</Link>
        <form className="d-flex" role="search">
        <Link to='coursses' className="navbar-brand">coursses</Link>
       
        </form>
      </Container>
    
    </nav>
    </>
  );
}

export default Navbar;