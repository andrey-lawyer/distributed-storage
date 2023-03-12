export const latencyNorthAmericaBlueRed = (
  numberTwoServers,
  west_usa_los_angeles,
  east_usa_new_york,
  germany_frankfurt,
  singapore
) => {
  let northAmericaLarge, northAmericaMedium, northAmericaSmall;
  if (numberTwoServers === 1) {
    northAmericaLarge =
      west_usa_los_angeles.north_america.salt_lake_city_large.latency;
    northAmericaMedium =
      west_usa_los_angeles.north_america.dallas_medium.latency;
    northAmericaSmall =
      west_usa_los_angeles.north_america.chicago_small.latency;
  } else if (numberTwoServers === 2) {
    northAmericaLarge =
      east_usa_new_york.north_america.salt_lake_city_large.latency;
    northAmericaMedium = east_usa_new_york.north_america.dallas_medium.latency;
    northAmericaSmall = east_usa_new_york.north_america.chicago_small.latency;
  } else if (numberTwoServers === 3) {
    northAmericaLarge =
      germany_frankfurt.north_america.salt_lake_city_large.latency;
    northAmericaMedium = germany_frankfurt.north_america.dallas_medium.latency;
    northAmericaSmall = germany_frankfurt.north_america.chicago_small.latency;
  } else {
    northAmericaLarge = singapore.north_america.salt_lake_city_large.latency;
    northAmericaMedium = singapore.north_america.dallas_medium.latency;
    northAmericaSmall = singapore.north_america.chicago_small.latency;
  }

  return { northAmericaLarge, northAmericaMedium, northAmericaSmall };
};

export const latencySouthAmericaBlueRed = (
  numberTwoServers,
  west_usa_los_angeles,
  east_usa_new_york,
  germany_frankfurt,
  singapore
) => {
  let southAmericaLarge, southAmericaMedium, southAmericaSmall;
  if (numberTwoServers === 1) {
    southAmericaLarge = west_usa_los_angeles.south_america.bogota_large.latency;
    southAmericaMedium =
      west_usa_los_angeles.south_america.buenos_aires_medium.latency;
    southAmericaSmall =
      west_usa_los_angeles.south_america.brasilia_small.latency;
  } else if (numberTwoServers === 2) {
    southAmericaLarge = east_usa_new_york.south_america.bogota_large.latency;
    southAmericaMedium =
      east_usa_new_york.south_america.buenos_aires_medium.latency;
    southAmericaSmall = east_usa_new_york.south_america.brasilia_small.latency;
  } else if (numberTwoServers === 3) {
    southAmericaLarge = germany_frankfurt.south_america.bogota_large.latency;
    southAmericaMedium =
      germany_frankfurt.south_america.buenos_aires_medium.latency;
    southAmericaSmall = germany_frankfurt.south_america.brasilia_small.latency;
  } else {
    southAmericaLarge = singapore.south_america.bogota_large.latency;
    southAmericaMedium = singapore.south_america.buenos_aires_medium.latency;
    southAmericaSmall = singapore.south_america.brasilia_small.latency;
  }

  return { southAmericaLarge, southAmericaMedium, southAmericaSmall };
};

export const latencyEuropeBlueRed = (
  numberTwoServers,
  west_usa_los_angeles,
  east_usa_new_york,
  germany_frankfurt,
  singapore
) => {
  let europaLarge, europaMedium, europaSmall;
  if (numberTwoServers === 1) {
    europaLarge = west_usa_los_angeles.europa.moscow_large.latency;
    europaMedium = west_usa_los_angeles.europa.madrid_medium.latency;
    europaSmall = west_usa_los_angeles.europa.warsaw_small.latency;
  } else if (numberTwoServers === 2) {
    europaLarge = east_usa_new_york.europa.moscow_large.latency;
    europaMedium = east_usa_new_york.europa.madrid_medium.latency;
    europaSmall = east_usa_new_york.europa.warsaw_small.latency;
  } else if (numberTwoServers === 3) {
    europaLarge = germany_frankfurt.europa.moscow_large.latency;
    europaMedium = germany_frankfurt.europa.madrid_medium.latency;
    europaSmall = germany_frankfurt.europa.warsaw_small.latency;
  } else {
    europaLarge = singapore.europa.moscow_large.latency;
    europaMedium = singapore.europa.madrid_medium.latency;
    europaSmall = singapore.europa.warsaw_small.latency;
  }

  return { europaLarge, europaMedium, europaSmall };
};

export const latencyOceaniaBlueRed = (
  numberTwoServers,
  west_usa_los_angeles,
  east_usa_new_york,
  germany_frankfurt,
  singapore
) => {
  let oceaniaLarge, oceaniaMedium, oceaniaSmall;
  if (numberTwoServers === 1) {
    oceaniaLarge = west_usa_los_angeles.oceania.melbourne_large.latency;
    oceaniaMedium = west_usa_los_angeles.oceania.perth_medium.latency;
    oceaniaSmall = west_usa_los_angeles.oceania.sydney_small.latency;
  } else if (numberTwoServers === 2) {
    oceaniaLarge = east_usa_new_york.oceania.melbourne_large.latency;
    oceaniaMedium = east_usa_new_york.oceania.perth_medium.latency;
    oceaniaSmall = east_usa_new_york.oceania.sydney_small.latency;
  } else if (numberTwoServers === 3) {
    oceaniaLarge = germany_frankfurt.oceania.melbourne_large.latency;
    oceaniaMedium = germany_frankfurt.oceania.perth_medium.latency;
    oceaniaSmall = germany_frankfurt.oceania.sydney_small.latency;
  } else {
    oceaniaLarge = singapore.oceania.melbourne_large.latency;
    oceaniaMedium = singapore.oceania.perth_medium.latency;
    oceaniaSmall = singapore.oceania.sydney_small.latency;
  }

  return { oceaniaLarge, oceaniaMedium, oceaniaSmall };
};

export const latencyAsiaBlueRed = (
  numberTwoServers,
  west_usa_los_angeles,
  east_usa_new_york,
  germany_frankfurt,
  singapore
) => {
  let asiaLarge, asiaMedium, asiaSmall;
  if (numberTwoServers === 1) {
    asiaLarge = west_usa_los_angeles.asia.seoul_large.latency;
    asiaMedium = west_usa_los_angeles.asia.new_delhi_medium.latency;
    asiaSmall = west_usa_los_angeles.asia.dhaka_small.latency;
  } else if (numberTwoServers === 2) {
    asiaLarge = east_usa_new_york.asia.seoul_large.latency;
    asiaMedium = east_usa_new_york.asia.new_delhi_medium.latency;
    asiaSmall = east_usa_new_york.asia.dhaka_small.latency;
  } else if (numberTwoServers === 3) {
    asiaLarge = germany_frankfurt.asia.seoul_large.latency;
    asiaMedium = germany_frankfurt.asia.new_delhi_medium.latency;
    asiaSmall = germany_frankfurt.asia.dhaka_small.latency;
  } else {
    asiaLarge = singapore.asia.seoul_large.latency;
    asiaMedium = singapore.asia.new_delhi_medium.latency;
    asiaSmall = singapore.asia.dhaka_small.latency;
  }

  return { asiaLarge, asiaMedium, asiaSmall };
};
