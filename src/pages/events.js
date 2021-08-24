import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Accordion from 'react-bootstrap/Accordion'
import Container from 'react-bootstrap/Container'
import { Helmet } from "react-helmet";
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/footer'



const Events = ({ data }) => {  
  return (
    <div>
      <Helmet>
        <body class="events-body" />
      </Helmet>
      <Header pageTitle="Events | Dana Alan for Supervisor of West Vincent Township" />
      
      <Container className="bar">
        <Container>
        <h1>Events</h1>
        </Container>
      </Container>

      <div className="background-container">
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
          <Container className="accordion-container">
            <Accordion defaultActiveKey="0">
              {
                data.allMdx.nodes.map((node, index) => (
                  <Accordion.Item eventKey={index} key={node.id}>
                    <Accordion.Header>
                      <div dangerouslySetInnerHTML={{ __html: node.frontmatter.title}}></div>
                      </Accordion.Header>
                    <Accordion.Body className={node.frontmatter.classTitle}>
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
      <Footer />

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
          classTitle
        }
      }
    }
  }
`

export default Events
