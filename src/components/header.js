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
					<Nav.Link>
						<Link to="/about" className="menu-item" activeClassName="active">About</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/fostering-our-future" className="menu-item" activeClassName="active">Fostering Our Future</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/events" className="menu-item" activeClassName="active">Events</Link>
					</Nav.Link>
					<Nav.Link>
						<Link to="/donate" className="menu-item" activeClassName="active">Donate</Link>
					</Nav.Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
  )
}

export default Header