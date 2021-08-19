import React from "react"
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Footer from '../components/footer'

const NotFound = () => {
  return (
    <div>
      <Header pageTitle="404 | Dana Alan for Supervisor of West Vincent Township" />
      <Container className="top-space">
        <h1>Page not found</h1>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
      </Container>
      <Footer />
    </div>
  )
}

export default NotFound