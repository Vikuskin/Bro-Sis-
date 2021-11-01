import styled from "styled-components";
import { Button } from "../Style/Button";

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const Buttons = () => (
  <StyledButtons>
    <Button>BRO!</Button>
    <Button>SIS!</Button>
  </StyledButtons>
);