import React from "react"
import styled from "styled-components"

const Background = styled.div`
  background: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  color: white;
  padding: 8rem 0;
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);
  text-align: center;
`

export default ({ title }) => (
  <Background>
    <h1>{title}</h1>
  </Background>
)
