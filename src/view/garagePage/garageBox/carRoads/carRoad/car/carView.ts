import CarApi from '../../../../../../api/carApi/carApi.singleton';
import { CAR_STRING_SVG_ELEMENT } from '../../../../../../constants/garagePageConstants';
import { EventBusEvents } from '../../../../../../eventBus/eventBus.interface';
import EventBus from '../../../../../../eventBus/eventBus.singleton';
import Car from '../../../../../../model/car/car.interfaces';
import { changeSvgColor } from '../../../../../../utilities/changeSvgColor';
import CreateElement from '../../../../../../utilities/createElement';

class CarView {
  private car: Car;

  constructor(car: Car) {
    this.car = car;

    this.subscribeUpdateCarRoadEvent();
  }

  renderCar() {
    const carWithNewColor = changeSvgColor(CAR_STRING_SVG_ELEMENT, this.car.color);

    const carImg = new CreateElement(
      'div',
      { className: `car car-${this.car.id}` },
      carWithNewColor
    ).createElement();

    return carImg;
  }

  renderCarModel() {
    const carModel = new CreateElement(
      'div',
      { className: `car-model car-model-${this.car.id}` },
      this.car.name
    ).createElement();

    return carModel;
  }

  private subscribeUpdateCarRoadEvent() {
    EventBus.register(EventBusEvents.EVENT_UPDATE_CAR_ROAD, async (carId: number) => {
      const updatedCar = await CarApi.getCar(carId);

      const carModel = document.querySelector(`.car-model-${carId}`);
      const carImg = document.querySelector(`.car-${carId}`);

      if (!carModel || !carImg) return;
      carModel.innerHTML = updatedCar.name;

      const carWithUpdatedColor = changeSvgColor(CAR_STRING_SVG_ELEMENT, updatedCar.color);

      carImg.innerHTML = carWithUpdatedColor;
    });
  }
}

export default CarView;
