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
        <h1>Donations</h1>
        </Container>
      </Container>


      <Container className="top-space">
        <Row>
          <Col md={10} lg={7} xl={6}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
        </Row>
      </Container>
      <Container>
        <StaticImage 
          src="../images/horse-1-gray-color-corrected.jpg" 
          alt="Dana Alan horseback riding"
          placeholder="blurred"
        />
        <figcaption>
          At a young age, Dana rode her first pony, Gray, in West Vincent Township at Ludwig's horse&nbsp;show.
        </figcaption>
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
