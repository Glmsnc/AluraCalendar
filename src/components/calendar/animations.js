import styled from "styled-components"

export const Animation = styled.div`
  transition: 0.4s;
  @media screen and (min-width: 400px) and (max-width: 2000px) {

    transform: translateX(
    ${({ lado, state }) => (lado === "direita" && 
    state==="entering" ? 25  
    :lado ==="esquerda" && state==="entering"
     ? -25 : 0)}vw
  );
  }
  ;
`



export const CalendarioMes = styled.div`
  transition: .75s;
    transform: translateX(
      ${({ state, lado }) => (state === "entering") && lado ==="esquerda"? "-100vw":
      ( state === "entering") && lado ==="direita"? "100vw": "0vw"
    }
  
  );  
  ;
`