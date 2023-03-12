import css from './../PathBlueRed/Path.module.css';
import {
  SingaporeAsiaLarge,
  SingaporeAsiaMedium,
  SingaporeAsiaSmall,
  SingaporeOceaniaLarge,
  SingaporeOceaniaMedium,
  SingaporeOceaniaSmall,
} from './../PathBlueRed/Singapore/Singapore.styled';

export const Singapore = ({
  numberTwoServers,
  countMenAsia,
  countMenOceania,
  fourthServer,
}) => {
  return (
    <>
      {(numberTwoServers === 4 || fourthServer) && (
        <>
          {countMenOceania === 3 && (
            <SingaporeOceaniaLarge className={css.path_all} />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <SingaporeOceaniaMedium className={css.path_all} />
          )}
          {countMenOceania !== 0 && (
            <SingaporeOceaniaSmall className={css.path_all} />
          )}
          {countMenAsia === 3 && (
            <SingaporeAsiaLarge className={css.path_all} />
          )}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <SingaporeAsiaMedium className={css.path_all} />
          )}
          {countMenAsia !== 0 && (
            <SingaporeAsiaSmall className={css.path_all} />
          )}
        </>
      )}
    </>
  );
};
