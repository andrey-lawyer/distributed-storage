import css from './../PathBlueRed/Path.module.css';

import {
  WestUsaSouthAmericaSmall,
  WestUsaSouthAmericaLarge,
  WestUsaSouthAmericaMedium,
  WestUsaNorthAmericaLarge,
  WestUsaNorthAmericaMedium,
  WestUsaNorthAmericaSmall,
} from './../PathBlueRed/WestUsa/WestUsa.styled';

export const WestUsa = ({
  numberTwoServers,
  countMenSouthAm,
  firstServer,
  countMenUsa,
  secondServer,
}) => {
  return (
    <>
      {(numberTwoServers === 1 || firstServer) && (
        <>
          {countMenSouthAm === 3 && (
            <WestUsaSouthAmericaLarge className={css.path_all} />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <WestUsaSouthAmericaMedium className={css.path_all} />
          )}
          {countMenSouthAm !== 0 && (
            <WestUsaSouthAmericaSmall className={css.path_all} />
          )}
          {numberTwoServers !== 2 && !secondServer && (
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
            </>
          )}
        </>
      )}
    </>
  );
};
