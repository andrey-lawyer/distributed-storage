import css from './../PathBlueRed/Path.module.css';
import {
  GermanyEuropeLarge,
  GermanyEuropeMedium,
  GermanyEuropeSmall,
  GermanyAsiaLarge,
  GermanyAsiaMedium,
  GermanyAsiaSmall,
  GermanyOceaniaLarge,
  GermanyOceaniaMedium,
  GermanyOceaniaSmall,
} from './../PathBlueRed/Germany/Germany.styled';

export const Germany = ({
  numberTwoServers,
  countMenEurope,
  countMenAsia,
  countMenOceania,
  thirdServer,
  fourthServer,
}) => {
  return (
    <>
      {(numberTwoServers === 3 || thirdServer) && (
        <>
          {countMenEurope === 3 && (
            <GermanyEuropeLarge className={css.path_all} />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <GermanyEuropeMedium className={css.path_all} />
          )}
          {countMenEurope !== 0 && (
            <GermanyEuropeSmall className={css.path_all} />
          )}
          {numberTwoServers !== 4 && !fourthServer && (
            <>
              {countMenOceania === 3 && (
                <GermanyOceaniaLarge className={css.path_all} />
              )}
              {(countMenOceania === 2 || countMenOceania === 3) && (
                <GermanyOceaniaMedium className={css.path_all} />
              )}
              {countMenOceania !== 0 && (
                <GermanyOceaniaSmall className={css.path_all} />
              )}
              {countMenAsia === 3 && (
                <GermanyAsiaLarge className={css.path_all} />
              )}
              {(countMenAsia === 2 || countMenAsia === 3) && (
                <GermanyAsiaMedium className={css.path_all} />
              )}
              {countMenAsia !== 0 && (
                <GermanyAsiaSmall className={css.path_all} />
              )}
            </>
          )}
        </>
      )}
    </>
  );
};
