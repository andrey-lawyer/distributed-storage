import styled from 'styled-components';
import iconServerOnlyRed from 'images/server_ByteCloud.png';

export const ServerOnlyRed = styled.div`
  position: absolute;
  background-size: cover;
  width: 30px;
  height: 40px;

  background-image: url(${iconServerOnlyRed});
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;
