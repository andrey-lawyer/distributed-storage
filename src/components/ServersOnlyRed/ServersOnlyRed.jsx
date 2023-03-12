import { ServerOnlyRed } from './ServersOnlyRed.styled';

export const ServersOnlyRed = ({
  firstServer,
  secondServer,
  thirdServer,
  fourthServer,
  numberTwoServers,
}) => {
  return (
    <>
      {firstServer && numberTwoServers !== 1 && (
        <ServerOnlyRed top="325px" left="175px" />
      )}
      {secondServer && numberTwoServers !== 2 && (
        <ServerOnlyRed top="305px" left="370px" />
      )}
      {thirdServer && numberTwoServers !== 3 && (
        <ServerOnlyRed top="280px" left="620px" />
      )}
      {fourthServer && numberTwoServers !== 4 && (
        <ServerOnlyRed top="487px" left="968px" />
      )}
    </>
  );
};
