import styled from "styled-components"

export const Animation = styled.div`
  transition: 0.5s;
  transform: translateX(
    ${({ lado }) => (lado === "right"  ? 800   :  lado ==="left" ? 0 : 400)}px
  );
  /* change color*/
  background: ${({ state }) => {
    switch (state) {
      case "entering":
        return ""
      case "entered":
        return ""
      case "exiting":
        return ""
      case "exited":
        return ""
    }
  }};
`