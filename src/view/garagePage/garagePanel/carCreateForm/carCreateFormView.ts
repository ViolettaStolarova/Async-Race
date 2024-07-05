import { CreateFormDefaultValues } from '../../../../constants/garagePageConstants';
import { EventBusEvents } from '../../../../eventBus/eventBus.interface';
import EventBus from '../../../../eventBus/eventBus.singleton';
import CreateElement from '../../../../utilities/createElement';

class CarCreateFormView {
  public render(garagePanelContainer: HTMLElement) {
    const carCreateForm = new CreateElement('form', {
      id: 'create-form',
    }).createElement() as HTMLFormElement;

    const carModelLabel = new CreateElement('label', {
      className: 'car-model-label',
    }).createElement();

    const carModelInput = new CreateElement('input', {
      className: 'car-model-input',
    }).createElement() as HTMLInputElement;
    carModelInput.type = 'text';

    const carColorLabel = new CreateElement('label', {
      className: 'car-color-label',
    }).createElement();

    const carColorInput = new CreateElement('input', {
      className: 'car-color-input',
    }).createElement() as HTMLInputElement;
    carColorInput.type = 'color';
    carColorInput.value = CreateFormDefaultValues.CAR_COLOR;

    const createButton = new CreateElement(
      'button',
      { className: 'create-btn' },
      'Create'
    ).createElement() as HTMLButtonElement;
    createButton.type = 'submit';

    carModelLabel.append(carModelInput);
    carColorLabel.append(carColorInput);

    carCreateForm.append(carModelLabel);
    carCreateForm.append(carColorLabel);
    carCreateForm.append(createButton);

    carCreateForm.addEventListener('submit', (event) => {
      event.preventDefault();

      if (carModelInput.value.trim() === '') {
        carModelInput.value = CreateFormDefaultValues.CAR_MODEL;
      }

      const carModel = carModelInput.value;
      const carColor = carColorInput.value;

      const carData = [carModel, carColor];

      EventBus.dispatch(EventBusEvents.EVENT_CREATE_CAR, carData);

      carModelInput.value = '';
      carColorInput.value = CreateFormDefaultValues.CAR_COLOR;
    });

    garagePanelContainer.append(carCreateForm);
  }
}

export default CarCreateFormView;
