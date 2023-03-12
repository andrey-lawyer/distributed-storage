import { EastUsa } from './EastUsa';
import { Germany } from './Germany';
import { Singapore } from './Singapore';
import { WestUsa } from './WestUsa';

export const PathOnlyRed = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
  firstServer,
  secondServer,
  thirdServer,
  fourthServer,
}) => {
  return (
    <>
      <WestUsa
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
        firstServer={firstServer}
        secondServer={secondServer}
      />

      <EastUsa
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
        secondServer={secondServer}
        firstServer={firstServer}
        thirdServer={thirdServer}
      />

      <Germany
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
        thirdServer={thirdServer}
        fourthServer={fourthServer}
      />

      <Singapore
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
        fourthServer={fourthServer}
      />
    </>
  );
};
