// import css from './West.module.css';
import css from './../Path.module.css';

import {
  WestUsaNorthAmericaSmall,
  WestUsaSouthAmericaSmall,
  WestUsaAsiaLarge,
  WestUsaAsiaMedium,
  WestUsaAsiaSmall,
  WestUsaEuropeLarge,
  WestUsaEuropeMedium,
  WestUsaEuropeSmall,
  WestUsaNorthAmericaLarge,
  WestUsaNorthAmericaMedium,
  WestUsaOceaniaLarge,
  WestUsaOceaniaMedium,
  WestUsaOceaniaSmall,
  WestUsaSouthAmericaLarge,
  WestUsaSouthAmericaMedium,
} from './WestUsa.styled';

export const WestUsa = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {numberTwoServers === 1 && (
        <>
          {countMenUsa === 3 && (
            <WestUsaNorthAmericaLarge className={css.path_all} />
          )}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <WestUsaNorthAmericaMedium className={css.path_all} />
          )}
          {countMenUsa !== 0 && (
            <WestUsaNorthAmericaSmall className={css.path_all} />
          )}
          {countMenOceania === 3 && (
            <WestUsaOceaniaLarge className={css.path_all} />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <WestUsaOceaniaMedium className={css.path_all} />
          )}
          {countMenOceania !== 0 && (
            <WestUsaOceaniaSmall className={css.path_all} />
          )}
          {countMenEurope === 3 && (
            <WestUsaEuropeLarge className={css.path_all} />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <WestUsaEuropeMedium className={css.path_all} />
          )}
          {countMenEurope !== 0 && (
            <WestUsaEuropeSmall className={css.path_all} />
          )}
          {countMenSouthAm === 3 && (
            <WestUsaSouthAmericaLarge className={css.path_all} />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <WestUsaSouthAmericaMedium className={css.path_all} />
          )}
          {countMenSouthAm !== 0 && (
            <WestUsaSouthAmericaSmall className={css.path_all} />
          )}
          {countMenAsia === 3 && <WestUsaAsiaLarge className={css.path_all} />}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <WestUsaAsiaMedium className={css.path_all} />
          )}
          {countMenAsia !== 0 && <WestUsaAsiaSmall className={css.path_all} />}
        </>
      )}
    </>
  );
};
