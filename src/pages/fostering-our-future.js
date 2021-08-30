import React from "react"
import Header from '../components/header'
import { graphql } from 'gatsby'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/footer'

const FosteringOurFuture = ({ data }) => {
  return (
    <div className="fostering-page">
      <Header pageTitle="Fostering Our Future | Dana Alan for Supervisor of West Vincent Township" />
      <Container className="bar">
        <Container>
        <h1>Fostering Our Future</h1>
        </Container>
      </Container>

      <Container className="top-space fostering-page">

        <Row className="biography">
          <Col><StaticImage className="first-image" src="../images/fostering-our-future/sustainability-township-bldg-and-yatch-club-2x3.jpeg" alt="Dana profile photo" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Financial Stability</h2>
            <p>As a fiscally-minded businessperson, I will work to ensure responsible use of our tax dollars to minimize expenditures and maximize results. Our current supervisors, working with Township Manager John Granger, are doing an admirable job of finding ways to improve our township facilities and parks through available grants and sound financial decisions. I plan to continue that mindset of conserving our resources through intelligent capital&nbsp;improvements.</p>
          </Col>
        </Row>

        <Row data-sal="slide-right" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/public-works-2x3.jpg" alt="Township building with solar panels" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Sustainability</h2>
            <p>I will work with our Sustainability Committee as well as our residents to find ways to lower our environmental impact, while being mindful…. For example: by moving our township facilities towards 100% renewable&nbsp;energy.</p>
            <p>We are already making progress. We just purchased our first hybrid vehicle for our Police Department, we are moving our township facilities towards 100% renewable energy, and we plan to work with Homeowner Associations on allowing Solar&nbsp;Panels.</p>
            <p>We must always be mindful of how things affect people, profits, and our&nbsp;planet.</p></Col>
        </Row>

        <Row data-sal="slide-left" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/police-weatherstone-2x3-expanded.jpeg" alt="Weatherstone house flag" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Supporting our Police&nbsp;Force</h2>
            <p>We are fortunate to have such a wonderful police force under the direction of Chief Mike Swininger, who is dedicated to our citizens' safety and well-being. I’m particularly impressed by his forward-thinking establishment of an advisory committee of residents, working to facilitate reform and promoting a better future for all, through the Youth Aid Panel.</p>
            <p>Where else can you find a police force so supportive of protecting our residents through their varied endeavors? – from directing traffic for the Litter Lifters, to shutting down roads during amphibian&nbsp;crossings.</p>
            <p>The West Vincent Police make even our smallest concerns their top&nbsp;priorities.</p></Col>
        </Row>

        <Row data-sal="slide-right" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/rainbow-2x3.JPG" alt="Dana profile" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Diversity and Inclusion</h2>
            <p>We need to invite younger more diverse voices into the local government, to ensure the township’s vitality far into the future. I will work to engage and inspire our younger residents to participate through involvement and&nbsp;education.</p></Col>
        </Row>

        <Row data-sal="slide-left" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/open-space-birchrun-road-2x3-expanded.jpeg" alt="Landscape view at Birchrun road" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Open Space</h2>
            <p>I'll work with our Open Space Review Board as well as our residents to use our designated open space funds wisely to increase our property values, lower our tax burden, and benefit the health of the environment and the quality of life for our&nbsp;residents.</p>
            <p>By continuing to conserve our land, we reduce the congestion on our roads and increase our personal health and welfare. Protected open space improves the quality of life for all of&nbsp;us!</p></Col>
        </Row>

        <Row data-sal="slide-right" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/trash-pickup-3x2.jpg" alt="People tending to young trees" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Supporting our Public Works&nbsp;Department</h2>
            <p>They do so much for us that goes unnoticed, just because they are continually on top of things. From maintaining our park lands to removing downed trees, we need to give our road crew the tools they require to serve us well, with minimal downtime and maximum&nbsp;productivity.</p></Col>
        </Row>

        <Row data-sal="slide-left" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/parks-evans-park-gazebo-2x3.jpeg" alt="Evans park gazebo" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Parks and Recreation</h2>
            <p>I'll work with our Parks & Recreation Commission as well as our residents to enhance public use and enjoyment of our beautiful parks, and I'll work with our Supervisors and township manager to continue to find grants to fund&nbsp;improvements.</p></Col>
        </Row>

        <Row data-sal="slide-right" data-sal-duration="700" className="biography">
          <Col><StaticImage src="../images/fostering-our-future/community-dog-walk-2x3.jpg" alt="Community dog walk" placeholder="blurred" /></Col>
          <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Community</h2>
            <p>I have always been enthusiastic about community-building events and other collaborative opportunities. I also strongly support promoting our various parks and the Fellowship Garden as healthy lifestyle choices that also bolster our ecosystems. I am for maintaining and expanding our trail&nbsp;systems.</p>
            <p>I am encouraged by the vibrant retail developments slated to occur within Weatherstone Flats, where unique shops, important human services, and convenient restaurants – all offered with walkable/bikeable ease – will help to keep our residents localized, happy, and supporting one&nbsp;another.</p></Col>
        </Row>

        <Row data-sal="slide-left" data-sal-duration="700" className="biography">
        <Col><StaticImage src="../images/tent-3x2-v3.jpg" alt="Dana campaigning" placeholder="blurred" /></Col>
        <Col className="text-box" sm={12} md={6} lg={7} xl={6}>
            <h2>Communication</h2>
            <p>I believe local government works best when clear and concise information is easily available to the public. I am committed to driving ongoing and accessible township updates via our WVT website, through social media channels, from a diverse series of educational forums for residents where helpful insights are shared and dialogue is welcome, and by enhancing the inner-connectivity between our committees and with the&nbsp;public.</p>
          </Col>
        </Row>
            
      </Container>
      <Footer />

    </div>
  )
}

export const query = graphql`
  query {
    mdx(slug: {eq: "fostering-our-future"}) {
      body
    }
  }
`

export default FosteringOurFuture
