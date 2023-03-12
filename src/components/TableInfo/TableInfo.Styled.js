import styled from 'styled-components';
export const TableList = styled.ul`
  margin: 0;
  margin-left: 250px;
  padding: 0;
`;
export const TableItem = styled.li`
  display: flex;
  margin-top: 7px;
`;
export const Element = styled.div`
  opacity: 1;
  margin-left: 20px;
  background: linear-gradient(
    90deg,
    rgba(42, 217, 188, 1) 0%,
    rgba(12, 238, 190, 1) 100%
  );
`;

export const Region = styled.div`
  display: flex;
  font-size: 14px;
  border: 1px solid black;
  justify-content: space-between;
  font-weight: 700;
  padding: 3px 0px;
`;
export const RegionName = styled.p`
  padding-left: 40px;
  padding-top: 1px;
`;

export const Latency = styled.p`
  text-align: center;
  border: 1px solid black;
  width: 70px;
  padding: 3px 0px;
`;
export const Time = styled.p`
  text-align: center;
  border: 1px solid black;
  width: 140px;
  padding: 3px 0px;
`;
export const Video = styled.p`
  text-align: center;
  border: 1px solid black;
  width: 160px;
  padding: 3px 0px;
`;

export const BlockData = styled.div`
  display: flex;
`;

export const Span = styled.span`
  display: block;
  padding-top: 3px;
`;

export const Title = styled.h2`
  font-weight: 700;
  margin-left: 390px;
  margin-bottom: 10px;
  margin-top: 60px;
`;

export const TitleSpan = styled.span`
  padding-left: 240px;
`;
