import React from "react"
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Footer from '../components/footer'


const Attributions = () => {
	return (  
		<div>
			<Header />
			<Container className="bar">
				<Container>
				<h1>Attributions</h1>
				</Container>
			</Container>
			<Container className="attributions-body">
				<div>Email icon made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</div>
			</Container>
			<Footer />
		</div>
	)
}

export default Attributions