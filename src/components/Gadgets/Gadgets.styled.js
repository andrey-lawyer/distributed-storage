import styled from 'styled-components';
import iconPhone from 'images/large.png';
import iconTablet from 'images/medium.png';
import iconDesk from 'images/small.png';

export const Phone = styled.div`
  position: absolute;
  background-size: cover;
  width: 35px;
  height: 35px;

  background-image: url(${iconPhone});
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;

export const Tablet = styled.div`
  position: absolute;
  background-image: url(${iconTablet});
  background-size: cover;
  width: 35px;
  height: 35px;
  margin-left: 2px;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;
export const Desk = styled.div`
  position: absolute;
  background-image: url(${iconDesk});
  background-size: cover;
  width: 35px;
  height: 35px;
  margin-left: 2px;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 1;
`;
export const SomeGadgets = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`;
