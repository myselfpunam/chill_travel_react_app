import React, { useContext } from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';


const Header = () => {
  const { user ,userLogout} = useContext(AuthContext);
  const handleLogout=()=>{
    userLogout()
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(() => {

    })
  }
  return (
    <Navbar expand="lg" >
      <Container>
        <Link to='/'><Navbar.Brand href="/">
          <img className='' width="120" height="60" src={logo} alt="" />
        </Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search for destination"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>
          <Nav className="ms-auto">
            <Nav.Link className='fs-5 text-info' href="#link">News</Nav.Link>
            <Nav.Link className='fs-5 text-info' href="#link">Destination</Nav.Link>
            <Nav.Link className='fs-5 text-info' href="#home">Blog</Nav.Link>
            <Nav.Link className='fs-5 text-info' href="#link">Contact</Nav.Link>
            {
              user
              ?
              <Nav.Link className='fs-5 text-warning' href="#link">{user.displayName}</Nav.Link>
              :
              <></>
            }
            {
              user?.photoURL ?
                <img className='profile-img rounded-circle mx-4' src={user.photoURL} alt="" />
                :
                <></>
            }
            {
              user
                ?
                <Link><button onClick={handleLogout} class="btn btn-danger mx-2" type="button">Logout</button></Link>
                :
                <>
                  <Link to='/login'><button class="btn btn-success mx-2" type="button">Login</button></Link>
                  <Link to='/registration'><button class="btn btn-warning mx-2" type="button">Signup</button></Link>
                </>
            }


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;