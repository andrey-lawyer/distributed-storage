import styled from 'styled-components';

export const Message = styled.div`
  display: flex;
  font-size: 24px;
  text-align: center;
`;

export const MessageParagraph = styled.p`
  font-size: 24px;
`;
export const ButtonNext = styled.button`
  border: none;
  font-size: 24px;
  padding-top: 3px;
  margin-left: 2px;
  background-color: transparent;
  color: ${props => props.theme.colors.blue};
  cursor: pointer;
`;
export const ButtonStart = styled.button`
  border: none;
  font-size: 24px;
  padding-top: 3px;
  margin-left: 2px;
  background-color: transparent;
  color: ${props =>
    props.turnOf ? props.theme.colors.grey : props.theme.colors.blue};
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;
