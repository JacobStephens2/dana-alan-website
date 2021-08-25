import React from "react"
import Header from '../components/header'
import Container from 'react-bootstrap/Container'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'


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
        <Row lg={9}>
          <a className="biography" href="https://secure.actblue.com/donate/wvdemocrats?refcode=web">
          <StaticImage 
            layout="constrained"
            alt="Dana headshot photo"
            src={"../images/donation-page-image.png"}
            className="home-page-image"
          />
          </a>
        </Row>
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
