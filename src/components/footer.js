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
				<Col xs={4} sm={6} md={2} lg={0} className="donate-column">
					<div className="donate-button-box">
						<Link to="/donate" className="nav-link menu-donate donate-button" activeClassName="active">Donate</Link>
					</div>
				</Col>	

				<Col xs={8} sm={6} md={4} lg={6} className="contact-column">
					<p className="contact">
					<MailIcon />
					&ensp;	
					<a href="mailto:danaalanWVT@gmail.com">danaalanWVT@gmail.com</a>
					</p>
				</Col>	
			
				<Col xs={12} sm={6} md={4} lg={4} className="attribution-column">
					<div className="copyright attribution">Designed and Donated&nbsp;by&ensp;<a className="attribution-link" href="https://stewardgoods.com">15&nbsp;East&nbsp;Creative</a></div>
				</Col>	

				<Col xs={12} sm={6} md={2} className="copyright-column align-items-center">
					<div className="copyright"><Link to="/attributions">&copy;&thinsp;{(new Date().getFullYear())} Dana&nbsp;Alan</Link>
					</div>
				</Col>	

			</Row>


			</Container>
		</Container>
	  
	)
  }
  
  export default Footer
