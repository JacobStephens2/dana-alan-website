import * as React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
	return (
		<Container className="footer bar">
			<Container>
			
			<p className="footer-link">
			<StaticImage 
				src="../images/envelope-white.svg" 
				alt="Dana Alan horseback riding"
				placeholder="blurred"
				className="envelope"
				width={25}
			/>
			&ensp;	
			<a href="mailto:danaalanWVT@gmail.com">danaalanWVT@gmail.com</a>
			<Link className="copyright" to="/attributions">
				<div>&copy;&thinsp;{(new Date().getFullYear())}&thinsp;Dana Alan</div>
			</Link>
			</p>
			

			</Container>
		</Container>
	  
	)
  }
  
  export default Footer
