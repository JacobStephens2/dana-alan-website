import * as React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import '../../scss/custom.scss';
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { StaticImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet'


const shortcodes = { StaticImage }

const Header = ({ pageTitle }) => {
  return (
    <div>
		<Helmet
			script={[{
				type: 'text/javascript',
				innerHTML: '(function(d){var s = d.createElement("script");s.setAttribute("data-account", "qBIAXSvfU7");s.setAttribute("src", "https://cdn.userway.org/widget.js");(d.body || d.head).appendChild(s);})(document)'
			}]}	
			noscript={[{
				innerHTML: 'Please ensure Javascript is enabled for purposes of <a href="https://userway.org">website accessibility</a>'
			}]}	
		/>

		<MDXProvider components={shortcodes}></MDXProvider>
		<title>{pageTitle}</title>
		<Navbar fixed="top" bg="light" expand="lg">
			<Container>
				<Navbar.Brand>
					<Link to="/" className="menu-item" activeClassName="active">
						Dana Alan for West Vincent<br />Township Supervisor
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="me-auto" activeKey="/home">
					<Link to="/about" className="nav-link" activeClassName="active">About</Link>
					<Link to="/fostering-our-future" className="nav-link" activeClassName="active">Fostering Our Future</Link>
					<Link to="/events" className="nav-link" activeClassName="active">Events</Link>
					<Link to="/donate" className="nav-link menu-donate" activeClassName="active">Donate</Link>
				</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</div>
  )
}

export default Header