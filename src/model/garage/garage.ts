import CarApi from '../../api/carApi/carApi.singleton';
import {
  PAGE_INITIALIZER,
  COUNT_OF_CARS_PER_PAGE,
  COUNT_OF_GENERATED_CARS,
} from '../../constants/gameConstants';

import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import { getGeneratedCarName } from '../../utilities/getGeneratedCarName';
import { getGeneratedColor } from '../../utilities/getGeneratedColor';
import CarToServer from '../car/car.interfaces';
import Race from '../race/race';
import { IGarage } from './garage.interface';

class Garage implements IGarage {
  public page: number;

  public race: Race;

  constructor() {
    this.page = PAGE_INITIALIZER;

    this.race = new Race(this.page);

    this.subscribeCreateCarEvent();
    this.subscribeDeleteCarEvent();
    this.subscribeUpdateCarEvent();

    this.subscribeChangeGaragePageEvent();

    this.subscribeGenerateCarsEvent();
  }

  private subscribeCreateCarEvent() {
    EventBus.register(EventBusEvents.EVENT_CREATE_CAR, async (newCarData: string[]) => {
      const cars = await CarApi.getCars(this.page, COUNT_OF_CARS_PER_PAGE);
      const newCar = await CarApi.createCar({ name: newCarData[0], color: newCarData[1] });

      this.race.getCars(this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, this.page);

      if (cars.length !== COUNT_OF_CARS_PER_PAGE) {
        EventBus.dispatch(EventBusEvents.EVENT_ADD_CAR_ROAD, newCar);
      }
    });
  }

  private subscribeDeleteCarEvent() {
    EventBus.register(EventBusEvents.EVENT_DELETE_CAR, async (carId: number) => {
      await CarApi.deleteCar(carId);

      this.race.getCars(this.page);

      EventBus.dispatch(EventBusEvents.EVENT_DELETE_CAR_ROAD, carId);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR_ROADS, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, this.page);
    });
  }

  private subscribeUpdateCarEvent() {
    EventBus.register(EventBusEvents.EVENT_UPDATE_CAR, async (car: CarToServer) => {
      await CarApi.updateCar(car.id!, { name: car.name, color: car.color });

      this.race.getCars(this.page);

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR_ROAD, car.id);
    });
  }

  private subscribeChangeGaragePageEvent() {
    EventBus.register(EventBusEvents.EVENT_CHANGE_GARAGE_PAGE, (page: number) => {
      this.page = page;
      this.race.getCars(this.page);
    });
  }

  private subscribeGenerateCarsEvent() {
    EventBus.register(EventBusEvents.EVENT_GENERATE_CARS, async () => {
      const carsData = Array.from({ length: COUNT_OF_GENERATED_CARS }, () => ({
        name: getGeneratedCarName(),
        color: getGeneratedColor(),
      }));

      const createCarPromises = carsData.map((carData) => CarApi.createCar(carData));

      await Promise.all(createCarPromises);

      this.race.getCars(this.page);

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR_ROADS, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, this.page);
    });
  }
}

export default Garage;
