export interface Registry {
  unregister: () => void;
}

export interface Callable {
  // eslint-disable-next-line @typescript-eslint/ban-types
  [key: string]: Function;
}

export interface Subscriber {
  [key: string]: Callable;
}

export interface IEventBus {
  dispatch<T>(event: string, arg?: T): void;
  register(event: string, callback: () => void): Registry;
}

// eslint-disable-next-line no-shadow
export const enum EventBusEvents {
  EVENT_ADD_CAR_ROAD = 'EventAddCarRoad',
  EVENT_DELETE_CAR_ROAD = 'EventDeleteCarRoad',
  EVENT_UPDATE_CAR_ROAD = 'EventUpdateCarRoad',
  EVENT_UPDATE_CAR_ROADS = 'EventUpdateCarRoads',

  EVENT_START_ENGINE = 'EventStartEngine',
  EVENT_STOP_ENGINE = 'EventStopEngine',

  EVENT_START_RACE = 'EventStartRace',
  EVENT_STOP_RACE = 'EventStopRace',

  EVENT_CREATE_CAR = 'EventCreateCar',
  EVENT_DELETE_CAR = 'EventDeleteCar',
  EVENT_SELECT_CAR = 'EventSelectCar',
  EVENT_UPDATE_CAR = 'EventUpdateCar',
  EVENT_GENERATE_CARS = 'EventGenerateCars',

  EVENT_UPDATE_GARAGE_TITLE = 'EventUpdateGarageTitle',
  EVENT_UPDATE_WINNERS_TITLE = 'EventUpdateWinnersTitle',

  EVENT_CHANGE_GARAGE_PAGE = 'EventChangeGaragePage',
  EVENT_CHANGE_WINNERS_PAGE = 'EventChangeWinnersPage',

  EVENT_CAR_WIN_IN_RACE = 'EventCarWinInRace',

  EVENT_ADD_NEW_WINNER = 'EventAddNewWinner',
  EVENT_SHOW_WINNER = 'EventShowWinner',

  EVENT_UPDATE_WINNERS_TABLE = 'EventUpdateWinnersTable',
}
