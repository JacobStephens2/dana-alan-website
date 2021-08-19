import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'


const Donate = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Donate | Dana Alan for Supervisor of West Vincent Township" />
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
          src="../images/horse-1-cropped.jpg" 
          alt="Dana Alan horseback riding"
          placeholder="blurred"
        />
        <figcaption>
          At a young age, Dana rode her first pony, Gray, in West Vincent Township at Ludwig's horse&nbsp;show.
        </figcaption>
      </Container>

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
