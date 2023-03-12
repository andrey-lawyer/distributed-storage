import { Man, SomeMan, OldMan, YangMan } from './People.styled';

export const People = ({
  onClickMenUsa,
  onClickMenSouthAm,
  onClickMenEurope,
  onClickMenAsia,
  onClickMenOceania,
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {!countMenUsa && (
        <SomeMan top="260px" left="260px">
          <OldMan onClick={() => onClickMenUsa(3)} />
          <Man onClick={() => onClickMenUsa(2)} />
          <YangMan onClick={() => onClickMenUsa(1)} />
        </SomeMan>
      )}
      {!countMenSouthAm && (
        <SomeMan top="480px" left="380px">
          <OldMan onClick={() => onClickMenSouthAm(3)} />
          <Man onClick={() => onClickMenSouthAm(2)} />
          <YangMan onClick={() => onClickMenSouthAm(1)} />
        </SomeMan>
      )}
      {!countMenEurope && (
        <SomeMan top="240px" left="650px">
          <OldMan onClick={() => onClickMenEurope(3)} />
          <Man onClick={() => onClickMenEurope(2)} />
          <YangMan onClick={() => onClickMenEurope(1)} />
        </SomeMan>
      )}
      {!countMenAsia && (
        <SomeMan top="330px" left="930px">
          <OldMan onClick={() => onClickMenAsia(3)} />
          <Man onClick={() => onClickMenAsia(2)} />
          <YangMan onClick={() => onClickMenAsia(1)} />
        </SomeMan>
      )}
      {!countMenOceania && (
        <SomeMan top="520px" left="1035px">
          <OldMan onClick={() => onClickMenOceania(3)} />
          <Man onClick={() => onClickMenOceania(2)} />
          <YangMan onClick={() => onClickMenOceania(1)} />
        </SomeMan>
      )}
    </>
  );
};
