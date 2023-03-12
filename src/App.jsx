import { useEffect, useState } from 'react';
import {
  Message,
  ButtonNext,
  ButtonStart,
  Overlay,
  MessageParagraph,
} from 'App.styled';
import { People } from 'components/People/People';
import { Gadgets } from 'components/Gadgets/Gadgets';
import { Circles } from 'components/Circles/Circles';
import { ServersBluRed } from 'components/ServersBluRed/ServersBluRed';
import { ServersOnlyRed } from 'components/ServersOnlyRed/ServersOnlyRed';
import { PathBlueRed } from 'components/PathBlueRed/PathBlueRed';
import { ScreensOnlyRed } from 'components/ScreensOnlyRed/ScreensOnlyRed';
import { PathOnlyRed } from 'components/PathOnlyRed/PathOnlyRed';
import { ScreensBlueRed } from 'components/ScreenBlueRed/ScreenBlueRed';
import { TableInfo } from 'components/TableInfo/TableInfo';

export const App = () => {
  const [countMenUsa, setCountMenUsa] = useState(0);
  const [countMenSouthAm, setCountMenSouthAm] = useState(0);
  const [countMenEurope, setCountMenEurope] = useState(0);
  const [countMenAsia, setCountMenAsia] = useState(0);
  const [countMenOceania, setCountMenOceania] = useState(0);

  const [allMen, setAllMen] = useState(true);

  const [circle, setCircle] = useState(false);

  const [firstServer, firstSetServer] = useState(false);
  const [secondServer, secondSetServer] = useState(false);
  const [thirdServer, thirdSetServer] = useState(false);
  const [fourthServer, fourthSetServer] = useState(false);

  const [numberCircle, setNumberCircle] = useState(0);
  const [numberTwoServers, setNumberTwoServers] = useState(0);

  const [pathOnlyRed, setPathOnlyRed] = useState(false);
  const [pathRedBlue, setPathRedBlue] = useState(false);

  const [gadgets, setGadgets] = useState(true);
  const [servers, setServers] = useState(true);

  const [pauseOnlyRed, setPauseOnlyRed] = useState(0);
  const [latencyAsiaOnlyRed, setLatencyAsiaOnlyRed] = useState(0);
  const [latencySouthAmericaOnlyRed, setLatencySouthAmericaOnlyRed] =
    useState(0);
  const [latencyNorthAmericaOnlyRed, setLatencyNorthAmericaOnlyRed] =
    useState(0);
  const [latencyEuropaOnlyRed, setLatencyEuropaOnlyRed] = useState(0);
  const [latencyOceaniaOnlyRed, setLatencyOceaniaOnlyRed] = useState(0);

  const [pauseBlueRed, setPauseBlueRed] = useState(0);
  const [latencyAsiaBlueRed, setLatencyAsiaBlueRed] = useState(0);
  const [latencySouthAmericaBlueRed, setLatencySouthAmericaBlueRed] =
    useState(0);
  const [latencyNorthAmericaBlueRed, setLatencyNorthAmericaBlueRed] =
    useState(0);
  const [latencyEuropaBlueRed, setLatencyEuropaBlueRed] = useState(0);
  const [latencyOceaniaBlueRed, setLatencyOceaniaBlueRed] = useState(0);
  const [table, setTable] = useState(false);

  let dataForTable;
  if (table) {
    const newArray = [
      {
        latencyByteCloud: latencyNorthAmericaOnlyRed,
        latencyObjectStorage: latencyNorthAmericaBlueRed,
        countGadgets: countMenUsa,
        region: 'North America',
      },
      {
        latencyByteCloud: latencySouthAmericaOnlyRed,
        latencyObjectStorage: latencySouthAmericaBlueRed,
        countGadgets: countMenSouthAm,
        region: 'South America',
      },
      {
        latencyByteCloud: latencyEuropaOnlyRed,
        latencyObjectStorage: latencyEuropaBlueRed,
        countGadgets: countMenEurope,
        region: 'Europe',
      },
      {
        latencyByteCloud: latencyAsiaOnlyRed,
        latencyObjectStorage: latencyAsiaBlueRed,
        countGadgets: countMenAsia,
        region: 'Asia',
      },
      {
        latencyByteCloud: latencyOceaniaOnlyRed,
        latencyObjectStorage: latencyOceaniaBlueRed,
        countGadgets: countMenOceania,
        region: 'Oceania',
      },
    ];

    dataForTable = newArray
      .filter(item => !!item.countGadgets)
      .map(item => {
        item.latencyByteCloud =
          item.latencyByteCloud > item.latencyObjectStorage
            ? item.latencyObjectStorage
            : item.latencyByteCloud;
        return { ...item, ...item.latencyObject };
      })
      .sort((a, b) => b.countGadgets - a.countGadgets);
    console.log(dataForTable);
  }

  const toTablesOnlyRed = (
    pause,
    asia,
    southAmerica,
    northAmerica,
    europa,
    oceania
  ) => {
    setPauseOnlyRed(pause);
    setLatencyAsiaOnlyRed(asia);
    setLatencySouthAmericaOnlyRed(southAmerica);
    setLatencyNorthAmericaOnlyRed(northAmerica);
    setLatencyEuropaOnlyRed(europa);
    setLatencyOceaniaOnlyRed(oceania);
  };
  if (!!pauseOnlyRed && !table) {
    setTimeout(() => {
      setPathRedBlue(true);
      setPathOnlyRed(false);
    }, pauseOnlyRed * 15 + 2000);
  }
  const toTablesBlueRed = (
    pause,
    asia,
    southAmerica,
    northAmerica,
    europa,
    oceania
  ) => {
    setPauseBlueRed(pause);
    setLatencyAsiaBlueRed(asia);
    setLatencySouthAmericaBlueRed(southAmerica);
    setLatencyNorthAmericaBlueRed(northAmerica);
    setLatencyEuropaBlueRed(europa);
    setLatencyOceaniaBlueRed(oceania);
  };

  if (!!pauseBlueRed && !table) {
    setTimeout(() => {
      setPathRedBlue(false);
      setTable(true);
      setServers(false);
      setGadgets(false);
    }, pauseOnlyRed * 15 + 2000);
  }

  const sumServers =
    Number(firstServer) +
    Number(secondServer) +
    Number(thirdServer) +
    Number(fourthServer);

  const isNext =
    !countMenUsa &&
    !countMenSouthAm &&
    !countMenEurope &&
    !countMenAsia &&
    !countMenOceania;

  const allPeople =
    countMenUsa &&
    countMenSouthAm &&
    countMenEurope &&
    countMenAsia &&
    countMenOceania;

  useEffect(() => {
    if (allPeople) {
      setCircle(true);
    }
  }, [allPeople]);

  const onClickMenUsa = count => {
    setCountMenUsa(count);
  };
  const onClickMenSouthAm = count => {
    setCountMenSouthAm(count);
  };
  const onClickMenEurope = count => {
    setCountMenEurope(count);
  };
  const onClickMenAsia = count => {
    setCountMenAsia(count);
  };
  const onClickMenOceania = count => {
    setCountMenOceania(count);
  };
  const onClickNext = () => {
    setCircle(true);
    setAllMen(false);
  };

  const onClickCircle = number => {
    if (numberCircle === 0) {
      setNumberTwoServers(number);
    }
    switch (number) {
      case 1:
        firstSetServer(true);
        break;
      case 2:
        secondSetServer(true);
        break;
      case 3:
        thirdSetServer(true);
        break;
      case 4:
        fourthSetServer(true);
        break;
      default:
        return;
    }
    setNumberCircle(number);
  };

  const onClickStart = () => {
    setPathOnlyRed(true);
    setCircle(false);
  };

  useEffect(() => {
    if (sumServers === 4) {
      setPathOnlyRed(true);
    }
  }, [sumServers]);

  const onClickRestart = () => {
    setNumberTwoServers(0);
    setTable(false);
    setPauseBlueRed(0);
    setPauseOnlyRed(0);
    setAllMen(true);
    setCircle(false);
    setCountMenUsa(0);
    setCountMenSouthAm(0);
    setCountMenEurope(0);
    setCountMenAsia(0);
    setCountMenOceania(0);
    setGadgets(true);
    setServers(true);
    firstSetServer(false);
    secondSetServer(false);
    thirdSetServer(false);
    fourthSetServer(false);
    setNumberCircle(0);
    setNumberTwoServers(0);
    setPathOnlyRed(false);
    setPathRedBlue(false);
  };

  return (
    <section>
      {!circle && !numberTwoServers && (
        <Message>
          <p>Where are you user? Choose the number for every region.</p>
          {!isNext && <ButtonNext onClick={onClickNext}>Next</ButtonNext>}
        </Message>
      )}
      {circle && !numberTwoServers && (
        <MessageParagraph>
          Where is your data? Choose one spot for Object Storage system{' '}
        </MessageParagraph>
      )}
      {!!numberTwoServers && !pathOnlyRed && !pathRedBlue && !table && (
        <Message>
          <p>Choose minimum two additional spots for ByteCloud and press</p>
          <ButtonStart
            onClick={onClickStart}
            disabled={sumServers < 3}
            turnOf={sumServers < 3}
          >
            Start
          </ButtonStart>
        </Message>
      )}
      {allMen && (
        <People
          onClickMenUsa={onClickMenUsa}
          countMenUsa={countMenUsa}
          onClickMenSouthAm={onClickMenSouthAm}
          countMenSouthAm={countMenSouthAm}
          onClickMenEurope={onClickMenEurope}
          countMenEurope={countMenEurope}
          onClickMenAsia={onClickMenAsia}
          countMenAsia={countMenAsia}
          onClickMenOceania={onClickMenOceania}
          countMenOceania={countMenOceania}
        />
      )}
      {gadgets && (
        <Gadgets
          countMenUsa={countMenUsa}
          countMenSouthAm={countMenSouthAm}
          countMenEurope={countMenEurope}
          countMenAsia={countMenAsia}
          countMenOceania={countMenOceania}
        />
      )}
      {circle && !pathOnlyRed && !pathRedBlue && (
        <Circles
          firstServer={firstServer}
          secondServer={secondServer}
          thirdServer={thirdServer}
          fourthServer={fourthServer}
          onClickCircle={onClickCircle}
          numberTwoServers={numberTwoServers}
        />
      )}
      {servers && (
        <>
          <ServersBluRed numberTwoServers={numberTwoServers} />
          <ServersOnlyRed
            firstServer={firstServer}
            secondServer={secondServer}
            thirdServer={thirdServer}
            fourthServer={fourthServer}
            numberTwoServers={numberTwoServers}
          />
        </>
      )}
      {pathOnlyRed && (
        <>
          <PathOnlyRed
            numberTwoServers={numberTwoServers}
            countMenUsa={countMenUsa}
            countMenSouthAm={countMenSouthAm}
            countMenEurope={countMenEurope}
            countMenAsia={countMenAsia}
            countMenOceania={countMenOceania}
            firstServer={firstServer}
            secondServer={secondServer}
            thirdServer={thirdServer}
            fourthServer={fourthServer}
          />
          <ScreensOnlyRed
            countMenUsa={countMenUsa}
            countMenSouthAm={countMenSouthAm}
            countMenEurope={countMenEurope}
            countMenAsia={countMenAsia}
            countMenOceania={countMenOceania}
            numberTwoServers={numberTwoServers}
            firstServer={firstServer}
            secondServer={secondServer}
            thirdServer={thirdServer}
            fourthServer={fourthServer}
            toTablesOnlyRed={toTablesOnlyRed}
          />
        </>
      )}
      {pathRedBlue && (
        <>
          <PathBlueRed
            numberTwoServers={numberTwoServers}
            countMenUsa={countMenUsa}
            countMenSouthAm={countMenSouthAm}
            countMenEurope={countMenEurope}
            countMenAsia={countMenAsia}
            countMenOceania={countMenOceania}
          />
          <ScreensBlueRed
            numberTwoServers={numberTwoServers}
            countMenUsa={countMenUsa}
            countMenSouthAm={countMenSouthAm}
            countMenEurope={countMenEurope}
            countMenAsia={countMenAsia}
            countMenOceania={countMenOceania}
            toTablesBlueRed={toTablesBlueRed}
          />
        </>
      )}
      {table && (
        <>
          <Overlay>
            <Message>
              <p>Do you want to</p>
              <ButtonStart onClick={onClickRestart}>start again?</ButtonStart>
            </Message>
            {dataForTable && (
              <TableInfo dataForTable={dataForTable}></TableInfo>
            )}
          </Overlay>
        </>
      )}
    </section>
  );
};
