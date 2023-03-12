import styled from 'styled-components';
import iconCircle from 'images/circle_empty.png';
import iconCircleBlack from 'images/circle_filled.png';

export const Circle = styled.div`
  position: absolute;
  background-size: cover;
  width: 35px;
  height: 35px;

  background-image: url(${iconCircle});
  top: ${props => props.top};
  left: ${props => props.left};
  :hover {
    background-image: url(${iconCircleBlack});
  }
`;
