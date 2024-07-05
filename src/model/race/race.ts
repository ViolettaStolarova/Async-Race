import CarApi from '../../api/carApi/carApi.singleton';
import { COUNT_OF_CARS_PER_PAGE } from '../../constants/gameConstants';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import Car from '../car/car';
import { WinRaceCar } from '../car/car.interfaces';
import { IRace } from './race.interface';

class Race implements IRace {
  public page: number;

  public cars: Car[] = [];

  public isRace = false;

  public isWinnerShown = false;

  constructor(page: number) {
    this.page = page;

    this.getCars(this.page);

    this.subscribeStartEngineEvent();
    this.subscribeStopEngineEvent();

    this.subscribeStartRaceEvent();
    this.subscribeStopRaceEvent();

    this.subscribeCarWinInRaceEvent();
  }

  async getCars(page: number): Promise<void> {
    this.cars = [];
    const cars = await CarApi.getCars(page, COUNT_OF_CARS_PER_PAGE);

    cars.forEach((car) => {
      this.cars.push(new Car(car));
    });
  }

  private subscribeStartEngineEvent(): void {
    EventBus.register(EventBusEvents.EVENT_START_ENGINE, (carId: number) => {
      const carElement = document.querySelector(`.car-${carId}`) as HTMLElement;

      const car = this.cars.find((elem) => carId === elem.car.id);

      if (!car) return;
      car.startEngine(carElement, this.isRace);
    });
  }

  private subscribeStopEngineEvent(): void {
    EventBus.register(EventBusEvents.EVENT_STOP_ENGINE, (carId: number) => {
      const carElement = document.querySelector(`.car-${carId}`) as HTMLElement;

      const car = this.cars.find((elem) => carId === elem.car.id);

      if (!car) return;
      car.stopEngine(carElement);
    });
  }

  private subscribeStartRaceEvent(): void {
    EventBus.register(EventBusEvents.EVENT_START_RACE, () => {
      this.isRace = true;
      this.isWinnerShown = false;

      this.cars.forEach((car) => {
        EventBus.dispatch(EventBusEvents.EVENT_START_ENGINE, car.car.id);
      });
    });
  }

  private subscribeStopRaceEvent(): void {
    EventBus.register(EventBusEvents.EVENT_STOP_RACE, () => {
      this.isRace = false;
      this.cars.forEach((car) => {
        EventBus.dispatch(EventBusEvents.EVENT_STOP_ENGINE, car.car.id);
      });
    });
  }

  private subscribeCarWinInRaceEvent(): void {
    EventBus.register(EventBusEvents.EVENT_CAR_WIN_IN_RACE, (winRaceCar: WinRaceCar) => {
      if (!this.isWinnerShown) {
        this.isWinnerShown = true;

        EventBus.dispatch(EventBusEvents.EVENT_ADD_NEW_WINNER, winRaceCar);
        EventBus.dispatch(EventBusEvents.EVENT_SHOW_WINNER, winRaceCar);
      }
    });
  }
}

export default Race;
