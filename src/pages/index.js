import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Button from "../components/btn"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaRegFilePdf, FaLinkedin } from "react-icons/fa"
import Form from "../components/form"
import Slider from "../components/slider"
import Box from "../components/box"
import Benefits from "../components/benefits"
import styled from "styled-components"

import ProjectCard from "../components/project-card"
import draughtMasterBg from "../assets/images/draughtmaster.jpg"
import intradcoBg from "../assets/images/intradco-global.jpg"
import ldcBg from "../assets/images/ldc.jpg"
import mycookBg from "../assets/images/mycook.jpg"
import qbeEuropeBg from "../assets/images/qbeeurope.jpg"
import qbeArticlesBg from "../assets/images/qbeeurope-articles.jpg"
import sdBg from "../assets/images/sd.jpg"

const StyledBackground = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

export default () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Container className="py-5">
      <div className="text-center">
        <h4 class="mb-3">Hi, I’m Michel Moraes. Nice to meet you.</h4>
        <div style={{ maxWidth: "850px", margin: "auto" }}>
          <p className="text-muted">
            Highly motivated, self-taught technology developer with over 8 years
            of software developing experience, passionate about everything
            related to the web and new technologies. Expert in WordPress, PHP,
            Javascript, React.js and Vue.js.
          </p>
          <p className="text-muted">
            I have worked on great projects for International companies such as
            QBE Europe, Carlsberg UK, Smiths Detection, Intradco Global, Louis
            Dreyfus Company (LDC), etc. focusing on building smart websites and
            solutions with cutting-edge technologies.
          </p>
        </div>
        <div className="text-center py-3">
          <Button
            to="https://linkedin.com/in/michelmany"
            className="btn btn-primary btn-lg"
          >
            <FaLinkedin className="mr-1 mb-1" />
            Linkedin Profile
          </Button>
        </div>
      </div>
    </Container>

    <StyledBackground>
      <Benefits />
      <div className="py-5" style={{ maxWidth: "1680px", margin: "auto" }}>
        <h2 className="text-center mb-4">Recent Work</h2>
        <Row>
          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.draughtmaster.com/"
              title="Carlsberg DraughtMaster"
              copy="Bootstrap4, Vue.js, Umbraco CMS."
              bgcolor="#000000"
              bgImg={draughtMasterBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.mycook.com.br/"
              title="MyCook Brazil"
              copy="Bootstrap4, Vue.js, Laravel."
              bgcolor="#F95701"
              bgImg={mycookBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.ldc.com/"
              title="LDC"
              copy="Bootstrap4, React, WordPress CMS."
              bgcolor="#32556E"
              bgImg={ldcBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.qbeeurope.com/"
              title="QBE Europe"
              copy="Bootstrap, jQuery, Umbraco CMS."
              bgcolor="#009FE3"
              bgImg={qbeEuropeBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.smithsdetection.com"
              title="Smiths Detection"
              copy="Bootstrap4, jQuery, WordPress CMS."
              bgcolor="#03559E"
              bgImg={sdBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://qbeeurope.com/resilience/"
              title="Qbe Articles"
              copy="Bootstrap, Vue.js, WordPress CMS."
              bgcolor="#001844"
              bgImg={qbeArticlesBg}
            />
          </Col>

          <Col xs="12" md="6" xl="4" className="mb-4">
            <ProjectCard
              to="https://www.intradco-global.com/"
              title="Intradco"
              copy="Bootstrap4, jQuery, WordPress CMS."
              bgcolor="#01A160"
              bgImg={intradcoBg}
            />
          </Col>
        </Row>
      </div>

      <div className="text-center pb-5">
        <Button to="/portfolio" className="btn btn-primary btn-lg">
          {/* <FaGithub className="mr-1 mb-1" /> */}
          View all recent works
        </Button>
      </div>

      {/* <div className="py-5">
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
      </div> */}
    </StyledBackground>
  </Layout>
)
