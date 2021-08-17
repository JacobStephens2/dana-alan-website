import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import { StaticImage } from "gatsby-plugin-image"

const Events = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Events | Dana Alan for Supervisor of West Vincent Township" />
      <Container>
      <StaticImage
        src="../images/dog-walk-landscape.jpg"
        alt="Dana Alan headshot"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
        <Accordion defaultActiveKey="0">
          {
            data.allMdx.nodes.map((node, index) => (
              <Accordion.Item eventKey={index} key={node.id}>
                <Accordion.Header>
                  <div dangerouslySetInnerHTML={{ __html: node.frontmatter.title}}></div>
                  </Accordion.Header>
                <Accordion.Body>
                    <MDXRenderer>
                      {node.body}
                    </MDXRenderer>
                  </Accordion.Body>
              </Accordion.Item>
            ))
          }
        </Accordion>
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/events/*/"}}
      sort: {fields: frontmatter___date, order: ASC}
      ) {
      nodes {
        id
        body
        frontmatter {
          title
          date(formatString: "MMMM")
        }
      }
    }
  }
`

export default Events
