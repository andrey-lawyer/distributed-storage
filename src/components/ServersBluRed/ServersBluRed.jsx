import { ServerBluRed } from './ServersBluRed.styled';

export const ServersBluRed = ({ numberTwoServers }) => {
  return (
    <>
      {numberTwoServers === 1 && <ServerBluRed top="325px" left="170px" />}
      {numberTwoServers === 2 && <ServerBluRed top="305px" left="358px" />}
      {numberTwoServers === 3 && <ServerBluRed top="280px" left="610px" />}
      {numberTwoServers === 4 && <ServerBluRed top="487px" left="965px" />}
    </>
  );
};
