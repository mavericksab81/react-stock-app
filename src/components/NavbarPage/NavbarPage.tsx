import React from 'react'
import { Container, Nav, Button, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import './NavbarPage.css';
function NavbarPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
      navigate('/login');
  }
  return (
    <Navbar bg="blue">
        <Container style={{transform: 'none'}}>
            <Navbar.Brand>
                <span style={{letterSpacing: '5px', color: '#1877f2 !important', fontSize: '20px', fontWeight: 'bold' }}>FINGINEERING</span>
            </Navbar.Brand>
            <Nav className="">
                <Nav.Link href="home" style={{color: 'white', display: 'flex', alignItems: 'center', marginRight: '1.5em', fontWeight: 'bold' }}>Home</Nav.Link>
                <Nav.Link href="blog" style={{color: 'white', display: 'flex', alignItems: 'center', marginRight: '1.5em', fontWeight: 'bold' }}>Blog</Nav.Link>
                <Nav.Link>
                    <Button className='primary' style={{ backgroundColor: 'rgb(0, 30, 60)', border: '1px solid #1877f2 !important', color: '#1877f2 !important', fontWeight: 'bold' }} onClick={handleLogin}>Login</Button>
                </Nav.Link>
            </Nav>
        </Container >
    </Navbar>
  )
}

export default NavbarPage