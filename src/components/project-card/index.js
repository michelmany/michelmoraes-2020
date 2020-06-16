import React from "react"
import Link from "../link"
import styled from "styled-components"

import "./style.scss"

let ProjectCard = styled.div`
  color: white;
  width: 100%;
  height: 300px;
  background: white center / cover no-repeat;
  transition-duration: 0.25s;
  overflow: hidden;

  @media (min-width: 1200px) {
    height: 215px;
  }

  @media (min-width: 1440px) {
    height: 300px;
  }

  @media (min-width: 1680px) {
    background: white center / contain no-repeat;
  }

  &:hover {
    .overlay {
      transform: translateY(0);
      top: 0;
    }
  }

  .overlay {
    transition: 0.2s;
    background: ${props => props.theme.primary};
    width: 100%;
    height: 100%;
    padding: 1rem;
    position: relative;
    top: 100%;
    opacity: 0.95;
  }
`

export default ({ to, title, copy, bgcolor = "green", bgImg, ...props }) => {
  return (
    <Link to={to} style={{ "text-decoration": "none" }}>
      <ProjectCard {...props} style={{ backgroundImage: `url(${bgImg})` }}>
        <div className="overlay" style={{ backgroundColor: bgcolor }}>
          <h4 className="mt-3">{title}</h4>
          <p>{copy}</p>
        </div>
      </ProjectCard>
    </Link>
  )
}
