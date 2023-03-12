import {
  ScreenDesk,
  ScreenPhone,
  SomeScreens,
  ScreenTablet,
  Latency,
} from './Screens.styled';
import germany from 'data-servers/germany.json';
import singapore_1 from 'data-servers/singapore.json';
import eastUsa from 'data-servers/east-usa.json';
import westUsa from 'data-servers/west-usa.json';
import {
  latencyNorthAmericaOnlyRed,
  latencySouthAmericaOnlyRed,
  latencyEuropaOnlyRed,
  latencyAsiaOnlyRed,
  latencyOceaniaOnlyRed,
} from 'services/latencyOnlyRed';
import { maxLatency } from 'services/maxLatencyOnlyRed';
import { useEffect, useState } from 'react';
import { toPause } from 'services/pause';
export const ScreensOnlyRed = ({
  countMenUsa,
  countMenSouthAm,
  countMenEurope,
  countMenAsia,
  countMenOceania,
  numberTwoServers,
  firstServer,
  secondServer,
  thirdServer,
  fourthServer,
  toTablesOnlyRed,
}) => {
  const { northAmericaLarge, northAmericaMedium, northAmericaSmall } =
    latencyNorthAmericaOnlyRed(
      secondServer,
      numberTwoServers,
      eastUsa.east_usa_new_york,
      westUsa.west_usa_los_angeles
    );
  const { southAmericaLarge, southAmericaMedium, southAmericaSmall } =
    latencySouthAmericaOnlyRed(
      firstServer,
      numberTwoServers,
      eastUsa.east_usa_new_york,
      westUsa.west_usa_los_angeles
    );
  const { europaLarge, europaMedium, europaSmall } = latencyEuropaOnlyRed(
    thirdServer,
    numberTwoServers,
    eastUsa.east_usa_new_york,
    germany.germany_frankfurt
  );
  const { asiaLarge, asiaMedium, asiaSmall } = latencyAsiaOnlyRed(
    fourthServer,
    numberTwoServers,
    singapore_1.singapore,
    germany.germany_frankfurt
  );
  const { oceaniaLarge, oceaniaMedium, oceaniaSmall } = latencyOceaniaOnlyRed(
    fourthServer,
    numberTwoServers,
    singapore_1.singapore,
    germany.germany_frankfurt
  );

  const maxLatencyNorthAmerica = maxLatency(
    countMenUsa,
    northAmericaLarge,
    northAmericaMedium,
    northAmericaSmall
  );

  const maxLatencySouthAmerica = maxLatency(
    countMenSouthAm,
    southAmericaLarge,
    southAmericaMedium,
    southAmericaSmall
  );

  const maxLatencyEuropa = maxLatency(
    countMenEurope,
    europaLarge,
    europaMedium,
    europaSmall
  );

  const maxLatencyAsia = maxLatency(
    countMenAsia,
    asiaLarge,
    asiaMedium,
    asiaSmall
  );
  const maxLatencyOceania = maxLatency(
    countMenOceania,
    oceaniaLarge,
    oceaniaMedium,
    oceaniaSmall
  );
  const maxPause = Math.max(
    maxLatencyNorthAmerica,
    maxLatencySouthAmerica,
    maxLatencyEuropa,
    maxLatencyAsia,
    maxLatencyOceania
  );

  useEffect(() => {
    toTablesOnlyRed(
      maxPause,
      maxLatencyAsia,
      maxLatencySouthAmerica,
      maxLatencyNorthAmerica,
      maxLatencyEuropa,
      maxLatencyOceania
    );
  }, [
    maxLatencyAsia,
    maxLatencyEuropa,
    maxLatencyNorthAmerica,
    maxLatencyOceania,
    maxLatencySouthAmerica,
    maxPause,
    toTablesOnlyRed,
  ]);
  const [pauseNorthAmerica, setPauseNorthAmerica] = useState(false);
  const [pauseSouthAmerica, setPauseSouthAmerica] = useState(false);
  const [pauseEuropa, setPauseEuropa] = useState(false);
  const [pauseAsia, setPauseAsia] = useState(false);
  const [pauseOceania, setPauseOceania] = useState(false);

  toPause(setPauseNorthAmerica, maxLatencyNorthAmerica);
  toPause(setPauseSouthAmerica, maxLatencySouthAmerica);
  toPause(setPauseEuropa, maxLatencyEuropa);
  toPause(setPauseAsia, maxLatencyAsia);
  toPause(setPauseOceania, maxLatencyOceania);

  return (
    <>
      {!!countMenUsa && (
        <SomeScreens top="300px" left="260px">
          {countMenUsa === 3 && (
            <ScreenPhone
              duration={northAmericaLarge}
              top="9.5px"
              left="-40.3px"
            />
          )}
          {(countMenUsa === 2 || countMenUsa === 3) && (
            <ScreenTablet
              duration={northAmericaMedium}
              top="24.8px"
              left="10.7px"
            />
          )}
          <ScreenDesk duration={northAmericaSmall} top="-3.8px" left="55.2px" />
          {!pauseNorthAmerica ? (
            <Latency top="43px" left="40px">
              latency:{` ${maxLatencyNorthAmerica}`}
            </Latency>
          ) : (
            <Latency top="43px" left="40px">
              time:{` ${maxLatencyNorthAmerica / 100}  sec`}
            </Latency>
          )}
        </SomeScreens>
      )}
      {!!countMenSouthAm && (
        <SomeScreens top="520px" left="380px">
          {countMenSouthAm === 3 && (
            <ScreenPhone
              duration={southAmericaLarge}
              top="-40.4px"
              left="-8.1px"
            />
          )}
          {(countMenSouthAm === 2 || countMenSouthAm === 3) && (
            <ScreenTablet
              duration={southAmericaMedium}
              top="45px"
              left="30.4px"
            />
          )}
          <ScreenDesk duration={southAmericaSmall} top="-2.3px" left="55px" />
          {!pauseSouthAmerica ? (
            <Latency top="-50px" left="62px">
              latency:{` ${maxLatencySouthAmerica}`}
            </Latency>
          ) : (
            <Latency top="-50px" left="62px">
              time:{` ${maxLatencySouthAmerica / 100}  sec`}
            </Latency>
          )}
        </SomeScreens>
      )}
      {!!countMenEurope && (
        <SomeScreens top="250px" left="700px">
          {countMenEurope === 3 && (
            <ScreenPhone duration={europaLarge} top="9.7px" left="56.8px" />
          )}
          {(countMenEurope === 2 || countMenEurope === 3) && (
            <ScreenTablet duration={europaMedium} top="70px" left="-109.6px" />
          )}
          <ScreenDesk duration={europaSmall} top="37.4px" left="-29.8px" />
          {!pauseEuropa ? (
            <Latency top="45px" left="12px">
              latency:{` ${maxLatencyEuropa}`}
            </Latency>
          ) : (
            <Latency top="45px" left="12px">
              time:{` ${maxLatencyEuropa / 100}  sec`}
            </Latency>
          )}
        </SomeScreens>
      )}
      {!!countMenAsia && (
        <SomeScreens top="330px" left="1010px">
          {countMenAsia === 3 && (
            <ScreenPhone duration={asiaLarge} top="-30.3px" left="26.8px" />
          )}
          {(countMenAsia === 2 || countMenAsia === 3) && (
            <ScreenTablet duration={asiaMedium} top="60px" left="-139.5px" />
          )}
          <ScreenDesk duration={asiaSmall} top="37.4px" left="-29.8px" />
          {!pauseAsia ? (
            <Latency top="-68px" left="20px">
              latency:{` ${maxLatencyAsia}`}
            </Latency>
          ) : (
            <Latency top="-68px" left="20px">
              time:{` ${maxLatencyAsia / 100}  sec`}
            </Latency>
          )}
        </SomeScreens>
      )}
      {!!countMenOceania && (
        <SomeScreens top="550px" left="1100px">
          {countMenOceania === 3 && (
            <ScreenPhone duration={oceaniaLarge} top="19.5px" left="-38.2px" />
          )}
          {(countMenOceania === 2 || countMenOceania === 3) && (
            <ScreenTablet duration={oceaniaMedium} top="15px" left="-94.4px" />
          )}
          <ScreenDesk duration={oceaniaSmall} top="17.4px" left="5.3px" />
          {!pauseOceania ? (
            <Latency top="55px" left="-35px">
              latency:{` ${maxLatencyOceania}`}
            </Latency>
          ) : (
            <Latency top="55px" left="-35px">
              time:{` ${maxLatencyOceania / 100}  sec`}
            </Latency>
          )}
        </SomeScreens>
      )}
    </>
  );
};
