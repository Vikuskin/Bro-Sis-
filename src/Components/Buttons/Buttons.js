import styled from "styled-components";
import { Button } from "../Style/Button";
import { Context } from '../Functions/context';
import { useContext } from 'react';

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const Buttons = () => {
  const { 
    authGoogle,
    authGit,
    authFB
  } = useContext(Context);

  return (
    <StyledButtons>
      {authGoogle.authentication || authGit.authentication || authFB.authentication ?
        <>
          <Button>BRO!</Button>
          <Button>SIS!</Button>
        </> :
        <>
        </>}
    </StyledButtons>
  );
}