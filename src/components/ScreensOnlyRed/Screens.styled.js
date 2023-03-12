import styled, { keyframes } from 'styled-components';

const SizePhone = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 12.1px;
  }
`;

const SizeTablet = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 18px;
  }
`;

const SizeDesk = keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: 28.5px;
  }
`;

export const ScreenPhone = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 2;
  height: 8px;

  animation: ${SizePhone};
  animation-duration: ${props => `${props.duration * 10}ms`};
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  background-color: blue;
  border-radius: 20%;
`;

export const ScreenTablet = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 2;
  height: 25px;

  animation: ${SizeTablet};
  animation-duration: ${props => `${props.duration * 10}ms`};
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  background-color: blue;
  border-radius: 5%;
`;
export const ScreenDesk = styled.div`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: 2;
  height: 17px;

  animation: ${SizeDesk};
  animation-duration: ${props => `${props.duration * 10}ms`};
  animation-fill-mode: forwards;
  animation-timing-function: linear;
  background-color: blue;
  border-radius: 5%;
`;

export const SomeScreens = styled.div`
  position: absolute;
  width: 200px;
  top: ${props => props.top};
  left: ${props => props.left};
`;

export const Latency = styled.p`
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  background-image: linear-gradient(
    270deg,
    #9fffed 0,
    #82ffee 16.67%,
    #5cfff0 33.33%,
    #00fff2 50%,
    #00f7f5 66.67%,
    #00effa 83.33%,
    #00e7ff 100%
  );
  border-radius: 3px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 1px;
  font-size: 14px;
`;
