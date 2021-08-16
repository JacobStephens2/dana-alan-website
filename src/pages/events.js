import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Accordion from 'react-bootstrap/Accordion'


const Events = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Events" />
      <Accordion>
        {
          data.allMdx.nodes.map((node) => (
            <Accordion.Item defaultActiveKey="0" key={node.id}>
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
      }
    }
  }
`

export default Events
