import { EastUsa } from './EastUsa/EastUsa';
import { Germany } from './Germany/Germany';
import { Singapore } from './Singapore/Singapore';
import { WestUsa } from './WestUsa/WestUsa';

export const PathBlueRed = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
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
      />

      <EastUsa
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
      />

      <Germany
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
      />

      <Singapore
        numberTwoServers={numberTwoServers}
        countMenUsa={countMenUsa}
        countMenSouthAm={countMenSouthAm}
        countMenEurope={countMenEurope}
        countMenAsia={countMenAsia}
        countMenOceania={countMenOceania}
      />
    </>
  );
};
