import styled from 'styled-components'

export const Slanted = styled.div`
  background-color: #282A36;
  background-image: linear-gradient(135deg,#282A36,#282A36);
  color: #fff;
  height: 100%;
  border-top: 0;
  -webkit-clip-path: polygon(0 0,100% 0,100% 80%,0 100%);
  clip-path: polygon(0 0,100% 0,100% 80%,0 100%);
  padding-bottom: 25%
`;
