import React from "react"
import styled from "styled-components"

const Box = styled.div`
  padding: 2rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  border-color: #f4f5f7;
  transition-duration: 0.3s;
  text-align: center;
  border-top: 2px solid ${props => props.theme.primary};
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    h4 {
      text-decoration: none !important;
    }
  }
`

export default ({ children, ...opts }) => <Box {...opts}>{children}</Box>
