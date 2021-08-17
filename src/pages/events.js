import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Accordion from 'react-bootstrap/Accordion'


const Events = props => {
  const events = props.data.allMdx;
  return (
    <div>
      <Header pageTitle="Events" />
      <Accordion defaultActiveKey="0">
        {
          events.nodes.map((node, index) => (
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
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(filter: {fileAbsolutePath: {regex: "/events/*/"}}) {
      nodes {
        id
        body
        frontmatter {
          title
        }
      }
    }
  }
`

export default Events
