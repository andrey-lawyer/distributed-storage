export const latencyNorthAmericaOnlyRed = (
  secondServer,
  numberTwoServers,
  east_usa_new_york,
  west_usa_los_angeles
) => {
  let northAmericaLarge, northAmericaMedium, northAmericaSmall;
  if (secondServer || numberTwoServers === 2) {
    northAmericaLarge =
      east_usa_new_york.north_america.salt_lake_city_large.latency;
    northAmericaMedium = east_usa_new_york.north_america.dallas_medium.latency;
    northAmericaSmall = east_usa_new_york.north_america.chicago_small.latency;
  } else {
    northAmericaLarge =
      west_usa_los_angeles.north_america.salt_lake_city_large.latency;
    northAmericaMedium =
      west_usa_los_angeles.north_america.dallas_medium.latency;
    northAmericaSmall =
      west_usa_los_angeles.north_america.chicago_small.latency;
  }

  return { northAmericaLarge, northAmericaMedium, northAmericaSmall };
};

export const latencySouthAmericaOnlyRed = (
  firstServer,
  numberTwoServers,
  east_usa_new_york,
  west_usa_los_angeles
) => {
  let southAmericaLarge, southAmericaMedium, southAmericaSmall;
  if (firstServer || numberTwoServers === 1) {
    southAmericaLarge = west_usa_los_angeles.south_america.bogota_large.latency;
    southAmericaMedium =
      west_usa_los_angeles.south_america.buenos_aires_medium.latency;
    southAmericaSmall =
      west_usa_los_angeles.south_america.brasilia_small.latency;
  } else {
    southAmericaLarge = east_usa_new_york.south_america.bogota_large.latency;
    southAmericaMedium =
      east_usa_new_york.south_america.buenos_aires_medium.latency;
    southAmericaSmall = east_usa_new_york.south_america.brasilia_small.latency;
  }

  return { southAmericaLarge, southAmericaMedium, southAmericaSmall };
};

export const latencyEuropaOnlyRed = (
  thirdServer,
  numberTwoServers,
  east_usa_new_york,
  germany_frankfurt
) => {
  let europaLarge, europaMedium, europaSmall;
  if (thirdServer || numberTwoServers === 3) {
    europaLarge = germany_frankfurt.europa.moscow_large.latency;
    europaMedium = germany_frankfurt.europa.madrid_medium.latency;
    europaSmall = germany_frankfurt.europa.warsaw_small.latency;
  } else {
    europaLarge = east_usa_new_york.europa.moscow_large.latency;
    europaMedium = east_usa_new_york.europa.madrid_medium.latency;
    europaSmall = east_usa_new_york.europa.warsaw_small.latency;
  }

  return { europaLarge, europaMedium, europaSmall };
};

export const latencyAsiaOnlyRed = (
  fourthServer,
  numberTwoServers,
  singapore,
  germany_frankfurt
) => {
  let asiaLarge, asiaMedium, asiaSmall;
  if (fourthServer || numberTwoServers === 4) {
    asiaLarge = singapore.asia.seoul_large.latency;
    asiaMedium = singapore.asia.new_delhi_medium.latency;
    asiaSmall = singapore.asia.dhaka_small.latency;
  } else {
    asiaLarge = germany_frankfurt.asia.seoul_large.latency;
    asiaMedium = germany_frankfurt.asia.new_delhi_medium.latency;
    asiaSmall = germany_frankfurt.asia.dhaka_small.latency;
  }
  return { asiaLarge, asiaMedium, asiaSmall };
};

export const latencyOceaniaOnlyRed = (
  fourthServer,
  numberTwoServers,
  singapore,
  germany_frankfurt
) => {
  let oceaniaLarge, oceaniaMedium, oceaniaSmall;
  if (fourthServer || numberTwoServers === 4) {
    oceaniaLarge = singapore.oceania.melbourne_large.latency;
    oceaniaMedium = singapore.oceania.perth_medium.latency;
    oceaniaSmall = singapore.oceania.sydney_small.latency;
  } else {
    oceaniaLarge = germany_frankfurt.oceania.melbourne_large.latency;
    oceaniaMedium = germany_frankfurt.oceania.perth_medium.latency;
    oceaniaSmall = germany_frankfurt.oceania.sydney_small.latency;
  }
  return { oceaniaLarge, oceaniaMedium, oceaniaSmall };
};
