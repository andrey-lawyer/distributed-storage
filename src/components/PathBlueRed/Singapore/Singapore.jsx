import css from './../Path.module.css';
import {
  SingaporeNorthAmericaSmall,
  SingaporeSouthAmericaSmall,
  SingaporeAsiaLarge,
  SingaporeAsiaMedium,
  SingaporeAsiaSmall,
  SingaporeEuropeLarge,
  SingaporeEuropeMedium,
  SingaporeEuropeSmall,
  SingaporeNorthAmericaLarge,
  SingaporeNorthAmericaMedium,
  SingaporeOceaniaLarge,
  SingaporeOceaniaMedium,
  SingaporeOceaniaSmall,
  SingaporeSouthAmericaLarge,
  SingaporeSouthAmericaMedium,
} from './Singapore.styled';

export const Singapore = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {numberTwoServers === 4 && (
        <>
          {countMenUsa === 3 && (
            <SingaporeNorthAmericaLarge className={css.path_all} />
          )}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <SingaporeNorthAmericaMedium className={css.path_all} />
          )}

           {countMenUsa !== 0 &&<SingaporeNorthAmericaSmall className={css.path_all} />}

          {countMenOceania === 3 && (
            <SingaporeOceaniaLarge className={css.path_all} />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <SingaporeOceaniaMedium className={css.path_all} />
          )}

          {countMenOceania !== 0 &&  <SingaporeOceaniaSmall className={css.path_all} />}

          {countMenEurope === 3 && (
            <SingaporeEuropeLarge className={css.path_all} />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <SingaporeEuropeMedium className={css.path_all} />
          )}

          {countMenEurope !== 0 &&<SingaporeEuropeSmall className={css.path_all} />}

          {countMenSouthAm === 3 && (
            <SingaporeSouthAmericaLarge className={css.path_all} />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <SingaporeSouthAmericaMedium className={css.path_all} />
          )}

          {countMenSouthAm !== 0 &&<SingaporeSouthAmericaSmall className={css.path_all} />}

          {countMenAsia === 3 && (
            <SingaporeAsiaLarge className={css.path_all} />
          )}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <SingaporeAsiaMedium className={css.path_all} />
          )}

          {countMenAsia !== 0 && <SingaporeAsiaSmall className={css.path_all} />}
        </>
      )}
    </>
  );
};
