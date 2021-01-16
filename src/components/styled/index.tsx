import styled from 'styled-components'

export const Slanted = styled.div`
  background-color: black;
  background-image: linear-gradient(135deg,black,black);
  color: ${props => props.color ? props.color : 'black'};
  height: 100%;
  border-top: 0;
  -webkit-clip-path: polygon(0 0,100% 0,100% 80%,0 100%);
  clip-path: polygon(0 0,100% 0,100% 80%,0 100%);
  padding-bottom: 25%
`;
