import styled from "styled-components"

export const TemplateStyle = styled.div`
  // No media query necessary for xs breakpoint as it's effectively `@media (min-width: 0) { ... }`
  @media (min-width: 576px) { }
  @media (min-width: 768px) { }
  @media (min-width: 992px) { }
  @media (min-width: 1200px) { }
  @media (min-width: 1400px) { }
  
`
