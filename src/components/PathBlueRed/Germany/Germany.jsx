import css from './../Path.module.css';
import {
  GermanyNorthAmericaSmall,
  GermanySouthAmericaSmall,
  GermanyAsiaLarge,
  GermanyAsiaMedium,
  GermanyAsiaSmall,
  GermanyEuropeLarge,
  GermanyEuropeMedium,
  GermanyEuropeSmall,
  GermanyNorthAmericaLarge,
  GermanyNorthAmericaMedium,
  GermanyOceaniaLarge,
  GermanyOceaniaMedium,
  GermanyOceaniaSmall,
  GermanySouthAmericaLarge,
  GermanySouthAmericaMedium,
} from './Germany.styled';

export const Germany = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {numberTwoServers === 3 && (
        <>
          {countMenUsa === 3 && (
            <GermanyNorthAmericaLarge className={css.path_all} />
          )}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <GermanyNorthAmericaMedium className={css.path_all} />
          )}
          {countMenUsa !== 0 && (
            <GermanyNorthAmericaSmall className={css.path_all} />
          )}
          {countMenOceania === 3 && (
            <GermanyOceaniaLarge className={css.path_all} />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <GermanyOceaniaMedium className={css.path_all} />
          )}
          {countMenOceania !== 0 && (
            <GermanyOceaniaSmall className={css.path_all} />
          )}
          {countMenEurope === 3 && (
            <GermanyEuropeLarge className={css.path_all} />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <GermanyEuropeMedium className={css.path_all} />
          )}
          {countMenEurope !== 0 && (
            <GermanyEuropeSmall className={css.path_all} />
          )}
          {countMenSouthAm === 3 && (
            <GermanySouthAmericaLarge className={css.path_all} />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <GermanySouthAmericaMedium className={css.path_all} />
          )}
          {countMenSouthAm !== 0 && (
            <GermanySouthAmericaSmall className={css.path_all} />
          )}
          {countMenAsia === 3 && <GermanyAsiaLarge className={css.path_all} />}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <GermanyAsiaMedium className={css.path_all} />
          )}
          {countMenAsia !== 0 && <GermanyAsiaSmall className={css.path_all} />}
        </>
      )}
    </>
  );
};
