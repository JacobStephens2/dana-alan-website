import * as React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from "gatsby"
import MailIcon from "../images/svg/envelope-white.svg";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Footer = () => {
	return (
		<Container className="footer bar">
			<Container>

			<Row>
				<Col xs={4} sm={3} md={4} lg={0} className="donate-column">
					<div className="donate-button-box">
						<a href="https://secure.actblue.com/donate/wvdemocrats?refcode=web">
							Donate
						</a>
					</div>
				</Col>	

				<Col xs={8} sm={4} lg={6}>
					<p className="contact">
					<MailIcon />
					&ensp;	
					<a href="mailto:danaalanWVT@gmail.com">danaalanWVT@gmail.com</a>
					</p>
				</Col>	


				<Col className="copyright-column align-items-center">
					<Link className="copyright" to="/attributions">
						<div>&copy;&thinsp;{(new Date().getFullYear())} Dana Alan</div>
					</Link>
				</Col>	
			</Row>


			</Container>
		</Container>
	  
	)
  }
  
  export default Footer
