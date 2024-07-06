import CarApi from '../../../../api/carApi/carApi.singleton';
import { CreateFormDefaultValues } from '../../../../constants/garagePageConstants';
import { EventBusEvents } from '../../../../eventBus/eventBus.interface';
import EventBus from '../../../../eventBus/eventBus.singleton';
import CarToServer from '../../../../model/car/car.interfaces';
import CreateElement from '../../../../utilities/createElement';

class CarUpdateFormView {
  public carId: number | undefined;

  constructor() {
    this.subscribeUpdateCarEvent();
  }

  public render(garagePanelContainer: HTMLElement) {
    const carUpdateForm = new CreateElement('form', { id: 'update-form' }).createElement();

    const carModelLabel = new CreateElement('label', {
      className: 'car-model-label',
    }).createElement();

    const carModelInput = new CreateElement('input', {
      className: 'car-model-input car-update-model-input',
    }).createElement() as HTMLInputElement;
    carModelInput.type = 'text';

    const carColorLabel = new CreateElement('label', {
      className: 'car-color-label',
    }).createElement();

    const carColorInput = new CreateElement('input', {
      className: 'car-color-input car-update-color-input',
    }).createElement() as HTMLInputElement;
    carColorInput.type = 'color';

    const updateButton = new CreateElement(
      'button',
      { className: 'update-btn' },
      'Update'
    ).createElement() as HTMLButtonElement;
    updateButton.type = 'submit';

    carModelLabel.append(carModelInput);
    carColorLabel.append(carColorInput);

    carUpdateForm.append(carModelLabel);
    carUpdateForm.append(carColorLabel);
    carUpdateForm.append(updateButton);

    carUpdateForm.addEventListener('submit', (event) => {
      event.preventDefault();
      if (typeof this.carId !== 'number') return;

      const car: CarToServer = {
        name: carModelInput.value,
        color: carColorInput.value,
        id: this.carId,
      };

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR, car);

      carModelInput.value = '';
      carColorInput.value = CreateFormDefaultValues.CAR_COLOR;
    });

    garagePanelContainer.append(carUpdateForm);
  }

  private subscribeUpdateCarEvent() {
    EventBus.register(EventBusEvents.EVENT_SELECT_CAR, async (carId: number) => {
      const selectedCar = await CarApi.getCar(carId);

      this.carId = carId;

      const carModelInput = document.querySelector('.car-update-model-input') as HTMLInputElement;
      const carColorInput = document.querySelector('.car-update-color-input') as HTMLInputElement;

      carModelInput.value = selectedCar.name;
      carColorInput.value = selectedCar.color;
    });
  }
}

export default CarUpdateFormView;
