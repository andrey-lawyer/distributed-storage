import { Circle } from './Circles.styled';

export const Circles = ({
  onClickCircle,
  numberTwoServers,
  firstServer,
  secondServer,
  thirdServer,
  fourthServer,
}) => {
  return (
    <>
      {numberTwoServers !== 1 && !firstServer && (
        <Circle top="325px" left="175px" onClick={() => onClickCircle(1)} />
      )}
      {numberTwoServers !== 2 && !secondServer && (
        <Circle top="315px" left="360px" onClick={() => onClickCircle(2)} />
      )}
      {numberTwoServers !== 3 && !thirdServer && (
        <Circle top="280px" left="610px" onClick={() => onClickCircle(3)} />
      )}
      {numberTwoServers !== 4 && !fourthServer && (
        <Circle top="485px" left="963px" onClick={() => onClickCircle(4)} />
      )}
    </>
  );
};
