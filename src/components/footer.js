import React from "react"
import { Container, Row, Col } from "reactstrap"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa"
import Link from "./link"
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a,
  a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a,
      a:hover {
        color: inherit;
      }
    }
  }
`
const SocialLink = ({ Icon, to }) => (
  <Link to={to} className="mr-2">
    <Icon size={30} />
  </Link>
)

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to}>{children}</Link>
  </li>
)

export default () => (
  <Footer>
    <Container>
      <Row>
        {/* <Col>
          <h5>Resources</h5>
          <ul>
            <FooterLink to="/">Item</FooterLink>
          </ul>
        </Col>
        <Col>
          <h5>Company</h5>
          <ul>
            <FooterLink to="/">Item</FooterLink>
          </ul>
        </Col> */}
        <Col>
          <ul>
            <FooterLink to="https://www.gatsbyjs.org/">
              Made with Gastby
            </FooterLink>
          </ul>
          <div className="ml-auto">
            <SocialLink
              Icon={FaLinkedin}
              to="https://www.linkedin.com/in/michelmany"
            />
            <SocialLink
              Icon={FaGithub}
              to="https://www.github.com/michelmany"
            />
            {/* <SocialLink
            Icon={FaInstagram}
            to="https://www.instagram/michelmany"
          /> */}
          </div>
        </Col>
      </Row>
    </Container>
  </Footer>
)
