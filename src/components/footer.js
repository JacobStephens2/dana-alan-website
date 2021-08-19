import * as React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container';


const Footer = () => {
	return (
		<Container className="footer">
			<Button className="footer-button" href="mailto:danaalanWVT@gmail.com" variant="info">
			Email Dana
			</Button>
			<p className="copyright">&emsp;&copy; Dana Alan {(new Date().getFullYear())}</p>
		</Container>
	  
	)
  }
  
  export default Footer
