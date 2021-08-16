import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ pageTitle }) => {
  return (
    <div>
      <title>{pageTitle}</title>
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">Dana Alan</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Nav.Link href="/about">About</Nav.Link>
					<Nav.Link href="/fostering-our-future">Fostering Our Future</Nav.Link>
					<Nav.Link href="/events">Events</Nav.Link>
					<Nav.Link href="/donate">Donate</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
  )
}

export default Header