import { Desk, Phone, SomeGadgets, Tablet } from './Gadgets.styled';

export const Gadgets = ({
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
}) => {
  return (
    <>
      {!!countMenUsa && (
        <SomeGadgets top="300px" left="260px">
          {countMenUsa === 3 && <Phone top="0px" left="-52px" />}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <Tablet top="20px" left="0px" />
          )}
          <Desk top="-11px" left="50px" />
        </SomeGadgets>
      )}
      {!!countMenSouthAm && (
        <SomeGadgets top="520px" left="380px">
          {countMenSouthAm === 3 && <Phone top="-50px" left="-20px" />}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <Tablet top="40px" left="20px" />
          )}
          <Desk top="-10px" left="50px" />
        </SomeGadgets>
      )}
      {!!countMenEurope && (
        <SomeGadgets top="250px" left="700px">
          {countMenEurope === 3 && <Phone top="0px" left="45px" />}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <Tablet top="65px" left="-120px" />
          )}
          <Desk top="30px" left="-35px" />
        </SomeGadgets>
      )}
      {!!countMenAsia && (
        <SomeGadgets top="330px" left="1010px">
          {countMenAsia === 3 && <Phone top="-40px" left="15px" />}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <Tablet top="55px" left="-150px" />
          )}
          <Desk top="30px" left="-35px" />
        </SomeGadgets>
      )}
      {!!countMenOceania && (
        <SomeGadgets top="550px" left="1100px">
          {countMenOceania === 3 && <Phone top="10px" left="-50px" />}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <Tablet top="10px" left="-105px" />
          )}
          <Desk top="10px" left="0px" />
        </SomeGadgets>
      )}
    </>
  );
};
