import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Carousel from 'react-bootstrap/Carousel'

const Home = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Home" />
      <h1>As West Vincent Township Supervisor, Dana Alan will</h1>
      <CardGroup>
      {
        data.allMdx.nodes.map((node) => (
          <div key={node.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>
                  <MDXRenderer>
                    {node.body}
                  </MDXRenderer>
                </Card.Title>
                <Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))
      }
      </CardGroup>
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