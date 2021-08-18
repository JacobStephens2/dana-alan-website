import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../../scss/custom.scss';
import { Link } from "gatsby"

const Header = ({ pageTitle }) => {
  return (
    <div>
      <title>{pageTitle}</title>
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="menu-item" activeClassName="active">Dana Alan for WVT Supervisor</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto">
					<Link to="/about" className="nav-link" activeClassName="active">About</Link>
					<Link to="/fostering-our-future" className="nav-link" activeClassName="active">Fostering Our Future</Link>
					<Link to="/events" className="nav-link" activeClassName="active">Events</Link>
					<Link to="/donate" className="nav-link" activeClassName="active">Donate</Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
  )
}

export default Header