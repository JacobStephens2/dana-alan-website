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
		<Helmet>
			<html lang="en" amp />
			<meta charSet="utf-8" />
			<meta name="description" content="Information about Dana Alan's 2021 campaign for West Vincent Township Supervisor" />
			<title>Dana Alan for West Vincent Township Supervisor Campaign Site</title>
			<link rel="canonical" href="https://danaalan.gatsbyjs.io" />
			<script type="application/ld+json">
				{`
					{
					"@context": "https://danaalan.gatsbyjs.io",
					"@type": "Individual",
					"url": "https://danaalan.gatsbyjs.io",
					"name": "Dana Alan for West Vincent Township Supervisor Campaign Site",
					"contactPoint": {
						"@type": "ContactPoint",
						"telephone": "+1-484-356-7773",
						"contactType": "Customer Support"
					}
					}
				`}
			</script>
		</Helmet>

		<MDXProvider components={shortcodes}></MDXProvider>
		<title>{pageTitle}</title>
		<Navbar bg="light" expand="lg">
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