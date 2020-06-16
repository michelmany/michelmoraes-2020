import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaCode, FaNodeJs } from "react-icons/fa"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"
import styled from "styled-components"

let StyledImg = styled(props => <Img {...props} />)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  picture,
  img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80, 102, 144, 0.1),
      16px 40px 75px -40px rgba(0, 0, 0, 0.2);
    border-radius: 0.625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

const Stack = ({ title, content }) => (
  <div className="d-flex mb-4">
    <FaNodeJs size={30} className="text-primary mr-3" />
    <div>
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

const Benefits = ({ data }) => (
  <Container className="py-5">
    <Row className="d-flex align-items-center">
      <Col md="6">
        <div className="mb-5">
          <h2 className="text-primary">Next Generation Websites</h2>
          {/* <p className="text-muted">Extremely fast. Just try it.</p> */}
        </div>
        <Stack
          title="Front-end Development"
          content="We're using the css-in-js methodology to make this website extremely fast! Javascript, React.js, Vue.js, Sass."
        />
        <Stack
          title="Back-end Development"
          content="I like to code things from scratch, and enjoy bringing ideas to life in the browser. PHP, WordPress, Laravel, Node.js, Express."
        />
      </Col>
      <Col md="6">
        <StyledImg
          fluid={data.file.childImageSharp.fluid}
          objectFit="contain"
          objectPosition="50% 50%"
        />
      </Col>
    </Row>
  </Container>
)

export default () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: { eq: "sample.png" }) {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <Benefits data={data} />}
  />
)
