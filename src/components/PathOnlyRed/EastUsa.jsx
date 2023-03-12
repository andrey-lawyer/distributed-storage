import css from './../PathBlueRed/Path.module.css';
import {
  EastUsaNorthAmericaSmall,
  EastUsaNorthAmericaLarge,
  EastUsaNorthAmericaMedium,
  EastUsaSouthAmericaSmall,
  EastUsaSouthAmericaLarge,
  EastUsaSouthAmericaMedium,
  EastUsaEuropeLarge,
  EastUsaEuropeMedium,
  EastUsaEuropeSmall,
} from './../PathBlueRed/EastUsa/EastUsa.styled';

export const EastUsa = ({
  numberTwoServers,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  secondServer,
  firstServer,
  thirdServer,
}) => {
  return (
    <>
      {(numberTwoServers === 2 || secondServer) && (
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
          {numberTwoServers !== 1 && !firstServer && (
            <>
              {countMenSouthAm === 3 && (
                <EastUsaSouthAmericaLarge className={css.path_all} />
              )}
              {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
                <EastUsaSouthAmericaMedium className={css.path_all} />
              )}
              {countMenSouthAm !== 0 && (
                <EastUsaSouthAmericaSmall className={css.path_all} />
              )}
            </>
          )}
          {numberTwoServers !== 3 && !thirdServer && (
            <>
              {countMenEurope === 3 && (
                <EastUsaEuropeLarge className={css.path_all} />
              )}
              {(countMenEurope === 2 || countMenEurope === 3) && (
                <EastUsaEuropeMedium className={css.path_all} />
              )}
              {countMenEurope !== 0 && (
                <EastUsaEuropeSmall className={css.path_all} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
