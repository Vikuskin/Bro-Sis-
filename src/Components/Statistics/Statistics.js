import styled from 'styled-components'

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

export const Statistics = () => (
  <StatisticsStyled>
    <div>Click's statistics:</div>
    <Bro>10 000 Bro!</Bro>
    <Sis>10 000 Sis!</Sis>
  </StatisticsStyled>
)