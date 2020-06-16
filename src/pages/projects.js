import React from "react"
import { Row, Col, Container } from "reactstrap"
import Link from "../components/link"
import Layout from "../components/layout"
import ContactForm from "../components/form"
import Styled from "styled-components"
import PageTitle from "../components/page-title"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { address, email, phone } = data.site.siteMetadata

  return (
    <Layout>
      <PageTitle title="Startup Projects" />
      <Container>
        <Row className="py-5">
          <Col>
            <p>In development...</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Projects {
    site {
      siteMetadata {
        address
        email
        phone
      }
    }
  }
`
