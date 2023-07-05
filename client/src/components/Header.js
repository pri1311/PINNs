import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary justify-content-sm-around" data-bs-theme="dark" style={{padding:"0.2rem", margin:"0"}}>
        <Container fluid className="mx-4 mt-2" style={{padding:"0 4rem"}}>
            <Navbar.Brand href="#home" style={{fontSize:"1rem"}}>
                <img
                alt=""
                src="https://cdn.iconscout.com/icon/free/png-256/free-movie-review-1751468-1489422.png?f=webp"
                width="25"
                height="25"
                className="d-inline-block align-top"
                />{' '}
                Popcorn
            </Navbar.Brand>
            <Navbar.Collapse id="navbarScroll" className="d-flex justify-content-lg-end">
                <Form className="d-flex" >
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{fontSize:"0.5rem"}}
                    />
                    <Button variant="outline-success" style={{fontSize:"0.5rem", padding:"0.1rem 0.5rem", margin:"0"}}>Search</Button>
                </Form>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header