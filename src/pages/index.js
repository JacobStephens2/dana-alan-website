import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import { StaticImage } from 'gatsby-plugin-image'

const Home = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Home | Dana Alan for Supervisor of West Vincent Township" />
      <div className="home-background-container">
        <StaticImage 
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          alt="Dana headshot photo"
          src={"../images/dana-alan-headshot.jpg"}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          <Carousel fade>
          {
            data.allMdx.nodes.map((node) => (
              <Carousel.Item className={node.frontmatter.classTitle} key={node.id}>
                <Carousel.Caption>
                  <h1>
                    As West Vincent Township Supervisor, Dana Alan will
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
      </div>

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