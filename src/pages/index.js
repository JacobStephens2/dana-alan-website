import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Carousel from 'react-bootstrap/Carousel'
import slideImage from "../images/birchrun-road-landscape.jpeg"

const Home = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Home" />
      <h1>As West Vincent Township Supervisor, Dana will</h1>
      <Carousel>
        {
          data.allMdx.nodes.map((node) => (
            <Carousel.Item key={node.id}>
              <Carousel.Caption>
                <MDXRenderer>
                  {node.body}
                </MDXRenderer>
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
    allMdx(filter: {fileAbsolutePath: {regex: "/platform-points/*/"}}) {
      nodes {
        frontmatter {
          title
        }
        id
        body
      }
    }
  }
`

export default Home