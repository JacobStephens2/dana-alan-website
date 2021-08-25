import React from "react"
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Donate = ({ data }) => {
  return (
    <div className="donate-page">
      <Header pageTitle="Donate | Dana Alan for Supervisor of West Vincent Township" />
      
      <Container className="bar">
        <Container>
        <h1>Donate</h1>
        </Container>
      </Container>


      <Container className="top-space">
        <Row>
          <Col>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
        </Row>
        <iframe id="donationPage"
          title="West Vincent Democrats Donation Page"
          width="1000"
          height="500"
          loading="lazy"
          src="https://westvincentdemocrats.com/">  
        </iframe>
      </Container>
      
      
      <Footer />

    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "donate"}) {
      body
    }
  }
`

export default Donate
