import styled from 'styled-components';
import iconServerBluRed from 'images/server.png';

export const ServerBluRed = styled.div`
  position: absolute;
  background-size: cover;
  width: 40px;
  height: 40px;

  background-image: url(${iconServerBluRed});
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 2;
`;
