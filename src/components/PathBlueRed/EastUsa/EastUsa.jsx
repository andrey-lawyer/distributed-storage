import css from './../Path.module.css';
import {
  EastUsaNorthAmericaSmall,
  EastUsaSouthAmericaSmall,
  EastUsaAsiaLarge,
  EastUsaAsiaMedium,
  EastUsaAsiaSmall,
  EastUsaEuropeLarge,
  EastUsaEuropeMedium,
  EastUsaEuropeSmall,
  EastUsaNorthAmericaLarge,
  EastUsaNorthAmericaMedium,
  EastUsaOceaniaLarge,
  EastUsaOceaniaMedium,
  EastUsaOceaniaSmall,
  EastUsaSouthAmericaLarge,
  EastUsaSouthAmericaMedium,
} from './EastUsa.styled';

export const EastUsa = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {numberTwoServers === 2 && (
        <>
          {countMenUsa === 3 && (
            <EastUsaNorthAmericaLarge className={css.path_all} />
          )}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <EastUsaNorthAmericaMedium className={css.path_all} />
          )}
          {countMenUsa !== 0 && (
            <EastUsaNorthAmericaSmall className={css.path_all} />
          )}
          {countMenOceania === 3 && (
            <EastUsaOceaniaLarge className={css.path_all} />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <EastUsaOceaniaMedium className={css.path_all} />
          )}
          {countMenOceania !== 0 && (
            <EastUsaOceaniaSmall className={css.path_all} />
          )}
          {countMenEurope === 3 && (
            <EastUsaEuropeLarge className={css.path_all} />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <EastUsaEuropeMedium className={css.path_all} />
          )}
          {countMenEurope !== 0 && (
            <EastUsaEuropeSmall className={css.path_all} />
          )}
          {countMenSouthAm === 3 && (
            <EastUsaSouthAmericaLarge className={css.path_all} />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <EastUsaSouthAmericaMedium className={css.path_all} />
          )}
          {countMenSouthAm !== 0 && (
            <EastUsaSouthAmericaSmall className={css.path_all} />
          )}
          {countMenAsia === 3 && <EastUsaAsiaLarge className={css.path_all} />}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <EastUsaAsiaMedium className={css.path_all} />
          )}
          {countMenAsia !== 0 && <EastUsaAsiaSmall className={css.path_all} />}
        </>
      )}
    </>
  );
};
