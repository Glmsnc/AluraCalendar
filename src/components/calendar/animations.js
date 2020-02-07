import styled from "styled-components"

export const Animation = styled.div`
  transition: 0.4s;
  @media screen and (min-width: 400px) and (max-width: 2000px) {

    transform: translateX(
    ${({ lado, state }) => (lado === "right" && 
    state==="entering" ? 75  
    :lado ==="left" && state==="entering"
     ? 25 : 50)}vw
  );
  }
  ;
`