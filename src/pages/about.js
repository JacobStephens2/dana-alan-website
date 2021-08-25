import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data }) => {
  return (
    <div className="about-page">
      <Header pageTitle="About | Dana Alan for Supervisor of West Vincent Township" />

      <Container className="bar">
        <Container>
        <h1>About Dana Alan</h1>
        </Container>
      </Container>

      <Container className="top-space biography">
        <Col md={9} lg={8} xl={7}>
          <blockquote>“The most important single ingredient in the formula of success is knowing how to get along with&nbsp;people.”&thinsp;</blockquote>
          <cite>Theodore Roosevelt (26th President,&nbsp;USA)</cite>
        </Col>
        <Row>
          <Col md={12} lg={7} xl={6}>
            <MDXRenderer>
              {data.mdx.body}
            </MDXRenderer>
          </Col>
          <Col md={12} lg={5}>
            <StaticImage
              src="../images/dana-profile-portrait-1x1.jpg"
              alt="Photo of Dana Alan on a bridge"
              placeholder="blurred"
              layout="constrained"
              className="about-image"
            />
          </Col>
        </Row>
      </Container>

      <Container>
        <Col md={10} lg={9} xl={8}>
          <div data-sal="slide-left" data-sal-duration="700">
            <h2>Dana Alan is invested in our&nbsp;township.</h2>

            <p>With a career spanning over 25 years as a sales, marketing, and advertising professional, Dana Alan will find solutions to complex problems, hold officials to account, and maintain fiscal responsibility. She will be working for ALL OF&nbsp;US.</p>

            <p><strong>A 22-year resident of West Vincent.</strong> Dana Alan is committed to preserving the beautiful landscapes, promoting only sustainable development, and saying “no” to new township&nbsp;taxes.</p>

            <p><strong>A life-long creative problem-solver.</strong> Dana Alan will work to ensure that every voice is heard and&nbsp;respected.</p>

            <p><strong>A history of community involvement.</strong> From the library to the PTA to the Community Garden and Community Day, Dana Alan has consistently worked to foster community in West&nbsp;Vincent.</p>
          </div>

          <div data-sal="slide-right" data-sal-duration="700">
            <h2>Dana Alan is committed to this&nbsp;community.</h2>

            <p>Dana and her husband, Ken, have lived in West Vincent for 22 years. Their two children, Tristan and Tia, went to Owen J. Roberts Schools from kindergarten through high school graduation. Throughout this time, Dana has worked and volunteered&nbsp;locally.</p>

            <ul>
              <li>Dana holds a BS in Business Administration from Saint Joseph’s&nbsp;University.</li>
              <li>Dana is a board member of the Friends of the Henrietta Hankin Branch Library and a member of the Community&nbsp;Garden.</li>
              <li>Dana regularly attends and speaks up at Supervisor meetings, as well as Parks & Recreation, EAC, Planning Commission, and Open&nbsp;Space.</li>
              <li>Dana has a consistent history of volunteering here in West Vincent. While her children were in school, Dana was on the PTA and helped out with the band and both the Boy and Girl Scouts. She has organized and worked at various school fundraisers/auctions and community events, such as Community&nbsp;Day.</li>
            </ul>

            <p>Learn more at <a href="https://westvincentdemocrats.com/candidates">West Vincent Democrats candidates page</a> and the <a href="https://www.facebook.com/DanaAlan_WVT-100405935539466">campaign Facebook&nbsp;page</a>.</p>

            <p>
              Email Dana at{" "}
              <a href="mailto:danaalanWVT@gmail.com">danaalanWVT@gmail.com</a>
            </p>

          </div>

        </Col>
      </Container>

      <Footer />

    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "about"}) {
      body
    }
  }
`

export default About
