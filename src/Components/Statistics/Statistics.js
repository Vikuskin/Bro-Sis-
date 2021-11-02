import styled from 'styled-components';
import { Context } from '../Functions/context';
import { useContext } from 'react';

const StatisticsStyled = styled.div`
  width: 100%;
  color: black;
  font-size: 20px;
  padding: 20px;
  text-align: center;
`;
const Bro = styled.span`
  padding: 15px;
`;
const Sis = styled.span`
  padding: 15px;
`;

export const Statistics = () => {
  const { 
    messagesBro,
    messagesSis
  } = useContext(Context);
  
  const broLength = Object.keys(messagesBro).length;
  const sisLength = Object.keys(messagesSis).length;

  return (
  <StatisticsStyled>
    <div>Click's statistics:</div>
    <Bro>{broLength} Bro!</Bro>
    <Sis>{sisLength} Sis!</Sis>
  </StatisticsStyled>
)
}