import styled from "styled-components";
import { Button } from "../Style/Button";
import { Context } from '../Functions/context';
import { useContext } from 'react';
import { nameSocial } from "../Functions/functions";
import { emailSocial } from "../Functions/functions";

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
    authFB,
    database,
  } = useContext(Context);

  const sendBro = () => {
    const time = new Date();
    const timeDate = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
    const name = nameSocial(authGoogle, authGit, authFB);
    const email = emailSocial(authGoogle, authGit, authFB);  
    database.ref('messages/bro').push().set({
      name: name,
      email: email,
      text: 'Bro!',
      time: timeDate
    });
  } 
  const sendSis = () => {
    const time = new Date();
    const timeDate = `${time.getHours()}:${time.getMinutes()} ${time.getDate()}.${time.getMonth()}.${time.getFullYear()}`;
    const name = nameSocial(authGoogle, authGit, authFB);
    const email = emailSocial(authGoogle, authGit, authFB); 
    database.ref('messages/sis').push().set({
      name: name,
      email: email,
      text: 'Sis!',
      time: timeDate
    })
  } 

  return (
    <StyledButtons>
      {authGoogle.authentication || authGit.authentication || authFB.authentication ?
        <>
          <Button onClick={sendBro}>BRO!</Button>
          <Button onClick={sendSis}>SIS!</Button>
        </> :
        <>
        </>}
    </StyledButtons>
  );
}