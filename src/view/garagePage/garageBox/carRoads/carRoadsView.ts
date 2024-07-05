import EventBus from '../../../../eventBus/eventBus.singleton';
import { EventBusEvents } from '../../../../eventBus/eventBus.interface';
import { getCarRoad, getCarRoadContainer } from '../../../../utilities/domUtils';
import CarApi from '../../../../api/carApi/carApi.singleton';
import { COUNT_OF_CARS_PER_PAGE } from '../../../../constants/gameConstants';
import CarRoadView from './carRoad/carRoadView';
import CarToServer from '../../../../model/car/car.interfaces';

class CarRoadsView {
  public page: number;

  constructor(page: number) {
    this.page = page;

    this.renderCarRoads(this.page);
    this.subscribeUpdateCarRoadsEvent();
    this.subscribeAddCarRoadEvent();
    this.subscribeDeleteCarRoadEvent();
  }

  private async renderCarRoads(page: number) {
    this.clearCarRoadContainer();

    const cars = await CarApi.getCars(page, COUNT_OF_CARS_PER_PAGE);

    cars.map((car) => new CarRoadView(car));
  }

  private clearCarRoadContainer(): void {
    const carRoadContainer = getCarRoadContainer();
    if (!carRoadContainer) return;

    carRoadContainer.innerHTML = '';
  }

  private subscribeUpdateCarRoadsEvent() {
    EventBus.register(EventBusEvents.EVENT_UPDATE_CAR_ROADS, (page: number) => {
      this.renderCarRoads(page);
    });
  }

  private subscribeAddCarRoadEvent() {
    EventBus.register(EventBusEvents.EVENT_ADD_CAR_ROAD, (car: CarToServer) => {
      // eslint-disable-next-line no-new
      new CarRoadView(car);
    });
  }

  private subscribeDeleteCarRoadEvent() {
    EventBus.register(EventBusEvents.EVENT_DELETE_CAR_ROAD, (numberOfCarRoad: number) => {
      const carRoad = getCarRoad(numberOfCarRoad);
      carRoad.remove();
    });
  }
}

export default CarRoadsView;
