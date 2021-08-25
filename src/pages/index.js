import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { StaticImage } from 'gatsby-plugin-image'

const Home = ({ data }) => {
  return (
    <div className="home-page">
      <Header pageTitle="Home | Dana Alan for Supervisor of West Vincent Township" />
      <div className="home-page-body">
        <Row>
          <Col md={12} lg={6} className="home-page-image">
              <StaticImage 
                layout="constrained"
                alt="Dana headshot photo"
                src={"../images/dana-alan-headshot.jpg"}
                className="home-page-image"
                />
          </Col>
          <Col>
            <Container className="bar">
              <Container className="platform-points">
                <h1>As West Vincent Township Supervisor, Dana Alan will:</h1>
                <ul>
                {
                  data.allMdx.nodes.map((node) => (
                          <MDXRenderer>
                            {node.body}
                          </MDXRenderer>
                  ))
                }
                </ul>
              </Container>
            </Container>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
    
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/platform-points/*/"}}
      sort: {fields: frontmatter___order, order: ASC}
    ) {
      nodes {
        frontmatter {
          title
          order
          classTitle
        }
        id
        body
      }
    }
  }
`

export default Home