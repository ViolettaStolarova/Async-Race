import { FLAG_STRING_SVG_ELEMENT } from '../../../../../constants/garagePageConstants';
import EventBus from '../../../../../eventBus/eventBus.singleton';
import { EventBusEvents } from '../../../../../eventBus/eventBus.interface';
import Car from '../../../../../model/car/car.interfaces';
import CreateElement from '../../../../../utilities/createElement';
import { getCarRoadContainer } from '../../../../../utilities/domUtils';
import CarView from './car/carView';

class CarRoadView {
  private carView: CarView;

  public car: Car;

  constructor(car: Car) {
    this.car = car;
    this.carView = new CarView(car);

    this.renderCarRoadContainer();
  }

  private renderCarRoadContainer(): void {
    const carRoadContainer = getCarRoadContainer();

    const carBox = new CreateElement('div', {
      className: `car-box car-box-${this.car.id}`,
    }).createElement();

    const selectRemoveButtons = this.renderSelectAndRemoveButtons();
    const startEndButtons = this.renderStartAndEndButtons();
    const carRoad = this.renderRoad();
    const carModel = this.carView.renderCarModel();

    carBox.append(selectRemoveButtons);
    carBox.append(startEndButtons);
    carBox.append(carModel);
    carBox.append(carRoad);

    carRoadContainer.append(carBox);
  }

  private renderRoad(): HTMLElement {
    const carRoad = new CreateElement('div', { className: 'road-container' }).createElement();
    const road = new CreateElement('div', { className: 'road' }).createElement();
    const flag = new CreateElement(
      'div',
      { className: 'road-flag' },
      FLAG_STRING_SVG_ELEMENT
    ).createElement();
    const car = this.carView.renderCar();

    carRoad.append(road);
    carRoad.append(car);
    carRoad.append(flag);

    return carRoad;
  }

  private renderSelectAndRemoveButtons(): HTMLElement {
    const selectRemoveButtonsContainer = new CreateElement('div', {
      className: 'select-remove-btns-container',
    }).createElement();

    const selectButton = new CreateElement(
      'button',
      { className: `select-btn select-btn-${this.car.id}` },
      'Select'
    ).createElement();
    const removeButton = new CreateElement(
      'button',
      { className: `remove-btn remove-btn-${this.car.id}` },
      'Remove'
    ).createElement();

    removeButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_DELETE_CAR, this.car.id);
    });

    selectButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_SELECT_CAR, this.car.id);
    });

    selectRemoveButtonsContainer.append(selectButton);
    selectRemoveButtonsContainer.append(removeButton);

    return selectRemoveButtonsContainer;
  }

  private renderStartAndEndButtons(): HTMLElement {
    const startEndButtonsContainer = new CreateElement('div', {
      className: 'start-end-btns-container',
    }).createElement();

    const startButton = new CreateElement(
      'button',
      { className: `start-btn start-btn_car-${this.car.id}` },
      'A'
    ).createElement() as HTMLButtonElement;
    const endButton = new CreateElement(
      'button',
      { className: `end-btn end-btn_car-${this.car.id}` },
      'B'
    ).createElement() as HTMLButtonElement;
    endButton.disabled = true;

    startButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_START_ENGINE, this.car.id);
      startButton.disabled = true;
      endButton.disabled = false;
    });

    endButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_STOP_ENGINE, this.car.id);
      endButton.disabled = true;
      startButton.disabled = false;
    });

    startEndButtonsContainer.append(startButton);
    startEndButtonsContainer.append(endButton);

    return startEndButtonsContainer;
  }
}

export default CarRoadView;
