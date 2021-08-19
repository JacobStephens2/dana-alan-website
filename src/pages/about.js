import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  return (
    <div>
      <Header pageTitle="About | Dana Alan for Supervisor of West Vincent Township" />
      <Container className="top-space">
        <Row>
          <Col md={10} lg={7} xl={6}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
          <Col>
            <StaticImage
              src="../images/dana-alan-linkedin-profile-picture.jpg"
              alt="Dana Alan headshot"
              placeholder="blurred"
              layout="fixed"
              className="about-image"
            />
          </Col>
        </Row>
      </Container>
      <Footer />

    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "about"}) {
      body
    }
  }
`

export default About
