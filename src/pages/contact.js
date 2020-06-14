import React from "react"
import { Row, Col, Container } from "reactstrap"
import Link from "../components/link"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Styled from "styled-components"
import PageTitle from "../components/page-title"
import { graphql } from "gatsby"

let Cirle = Styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

const ContactItem = ({ text, type, Icon, href }) => (
  <Col
    xs={6}
    lg={4}
    className="d-flex flex-column align-items-center"
    style={{ wordBreak: "break-word" }}
  >
    <Cirle className="h-4-rem w-4-rem absolute-center">
      <Icon size={30} />
    </Cirle>
    <div className="text-center">
      <h6>{type}</h6>
      <span className="text-secondary">
        {href ? (
          <Link to={href} className="reset">
            {text}
          </Link>
        ) : (
          text
        )}
      </span>
    </div>
  </Col>
)

export default ({ data }) => {
  const { address, email, phone } = data.site.siteMetadata

  return (
    <Layout>
      <PageTitle title="Contact Me" />
      <Container>
        <Row className="py-5">
          <ContactItem text={address} type="Address" Icon={FaMapMarkerAlt} />
          <ContactItem
            text={email}
            href={`mailto:${email}`}
            type="Email"
            Icon={FaEnvelope}
          />
          <ContactItem
            text={phone}
            href={`tel:${phone}`}
            type="Phone"
            Icon={FaPhone}
          />
        </Row>
        <hr />
        <Row className="py-5">
          <Col md={6} className="m-auto">
            <h4 className="text-center text-secondary">Message Me</h4>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        address
        email
        phone
      }
    }
  }
`
