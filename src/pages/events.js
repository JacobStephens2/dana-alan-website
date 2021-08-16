import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const Events = ({ data }) => {
  return (
    <div>
      <Header pageTitle="Events" />
      <Container className="top-space">
        <Row>
          <Col md={11} lg={8} xl={7}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "events"}) {
      body
    }
  }
`

export default Events
