import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet";
import { StaticImage } from 'gatsby-plugin-image'


const Events = ({ data }) => {
  return (
    <div>
      <Helmet>
        <body class="events-body" />
      </Helmet>
      <Header pageTitle="Events | Dana Alan for Supervisor of West Vincent Township" />

      <div style={{ display: "grid" }}>
        <StaticImage 
          style={{
            gridArea: "1/1",
          }}
          layout="fullWidth"
          alt="Dana campaigning"
          src={"../images/community-garden-1.jpeg"}
        />
        <div
          style={{
            gridArea: "1/1",
            position: "relative",
            display: "grid",
          }}
        >
          <Container>
            <h1>Events</h1>
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
      </div>

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
