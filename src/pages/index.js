import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'

const Home = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Home" />
      <Container className="top-space">
        <h2>As West Vincent Township Supervisor, Dana Alan will</h2>
      </Container>
      <Carousel fade>
        {
          data.allMdx.nodes.map((node) => (
            <Carousel.Item key={node.id}>
              <Carousel.Caption>
                <h1>
                  <MDXRenderer>
                    {node.body}
                  </MDXRenderer>
                </h1>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        }
      </Carousel>
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
        }
        id
        body
      }
    }
  }
`

export default Home