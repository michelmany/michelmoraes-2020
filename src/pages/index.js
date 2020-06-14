import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Button from "../components/btn"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaRegFilePdf } from "react-icons/fa"
import Form from "../components/form"
import Slider from "../components/slider"
import Box from "../components/box"
import Hr from "../components/hr"
import Benefits from "../components/benefits"
import styled from "styled-components"

const StyledBackground = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

const ProjectCard = ({ title, copy, bgcolor = "red" }) => (
  <Col xs="12" md="6" xl="4">
    <Link to="/">
      <div style={{ background: bgcolor }}>
        <h4 className="mt-3">{title}</h4>
        <p>{copy}</p>
      </div>
    </Link>
  </Col>
)

const StyledProjectCard = styled(ProjectCard)`
  height: 200px;
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Container className="py-5">
      <div className="text-center">
        <h4 class="mb-3">Welcome to my portfolio website.</h4>
        <p className="text-muted">
          Highly motivated, self-taught technology developer with over 8 years
          of software developing experience, passionate about everything related
          to the web and new technologies. Expert in WordPress, PHP, Javascript,
          React.js and Vue.js.
        </p>
        <p className="text-muted">
          I have worked on great projects for International companies such as
          QBE Europe, Carlsberg UK, Smiths Detection, Intradco Global, Louis
          Dreyfus Company (LDC), etc. focusing on building smart websites and
          solutions with cutting-edge technologies.
        </p>
        <div className="text-center py-3">
          <Button
            to="https://github.com/michelmany"
            className="btn btn-primary btn-lg"
          >
            <FaRegFilePdf className="mr-1 mb-1" />
            Download CV
          </Button>
        </div>
      </div>
    </Container>

    <StyledBackground>
      <Benefits />
      <div className="py-5">
        <h2 className="text-center mb-4">Recent Work</h2>
        <Row noGutters>
          <StyledProjectCard title="LDC" copy="Lorem Ipsum" bgcolor="#000" />
          <StyledProjectCard title="QBE Europe" copy="Lorem Ipsum" />
          <StyledProjectCard title="DraughtMaster" copy="Lorem Ipsum" />
          <StyledProjectCard title="Carlsberg UK" copy="Lorem Ipsum" />
          <StyledProjectCard title="MyCook" copy="Lorem Ipsum" />
          <StyledProjectCard title="Intradco" copy="Lorem Ipsum" />
        </Row>
      </div>

      <div className="text-center py-5">
        <Button
          to="https://github.com/michelmany"
          className="btn btn-primary btn-lg"
        >
          <FaGithub className="mr-1 mb-1" />
          View more on Github
        </Button>
      </div>

      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Box style={{ textAlign: "left" }}>
                <h3 className="text-center">Contact me</h3>
                <Form />
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
  </Layout>
)
