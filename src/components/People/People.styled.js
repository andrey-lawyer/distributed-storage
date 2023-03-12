import styled from 'styled-components';
import iconMan from 'images/man_empty.png';
import iconManBlue from 'images/man_filled.png';

export const YangMan = styled.div`
  background-size: cover;
  width: 11px;
  height: 26.5px;

  background-image: url(${iconMan});

  &:hover {
    background-image: url(${iconManBlue});
  }
`;

export const Man = styled.div`
  /* background: no-repeat; */
  background-image: url(${iconMan});
  background-size: cover;
  width: 21px;
  height: 50.5px;
  margin-left: 2px;
  :hover {
    background-image: url(${iconManBlue});
  }
`;
export const OldMan = styled.div`
  background-image: url(${iconMan});
  background-size: cover;
  width: 29px;
  height: 70px;
  margin-left: 2px;

  :hover {
    background-image: url(${iconManBlue});
  }
  &:hover ~ ${Man} {
    background-image: url(${iconManBlue});
  }
`;
export const SomeMan = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: end;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  &:hover > ${YangMan} {
    background-image: url(${iconManBlue});
  }
`;

//   export const StatsItemtUser = styled.li`
//   padding-bottom: ${props => props.theme.spacing(2)};
//   padding-top: ${props => props.theme.spacing(2)};
//   margin: 0;
//   text-align: center;
//   outline: solid 1px ${props => props.theme.colors.secondary};
//   width: 70px;
//   `;
