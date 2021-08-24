import * as React from 'react'
import Container from 'react-bootstrap/Container';


const Footer = () => {
	return (
		<Container className="footer bar">
			<Container>
			<a href="mailto:danaalanWVT@gmail.com">
			<p className="footer-button">
			danaalanWVT@gmail.com
			</p>
			</a>
			<p className="copyright">&emsp;&copy; Dana Alan {(new Date().getFullYear())}</p>
			</Container>
		</Container>
	  
	)
  }
  
  export default Footer
