import CarApi from '../../../api/carApi/carApi.singleton';
import { PAGE_INITIALIZER, COUNT_OF_CARS_PER_PAGE } from '../../../constants/gameConstants';
import { EventBusEvents } from '../../../eventBus/eventBus.interface';
import EventBus from '../../../eventBus/eventBus.singleton';
import CreateElement from '../../../utilities/createElement';
import { getMaxPageNumber } from '../../../utilities/getMaxPageNumber';

class GarageBoxView {
  public page: number;

  constructor() {
    this.page = PAGE_INITIALIZER;
  }

  public render(): HTMLElement {
    const garageBox = this.renderGarageBox();

    return garageBox;
  }

  private renderGarageBox(): HTMLElement {
    const garageBoxContainer = new CreateElement('div', {
      className: 'garage-box-container',
    }).createElement();

    const carRoadContainer = new CreateElement('div', {
      className: 'car-road-container',
    }).createElement();

    const garageBoxControlButtons = new CreateElement('div', {
      className: 'control-btns',
    }).createElement();

    const prevButton = new CreateElement(
      'button',
      { className: 'prev-btn' },
      'Prev'
    ).createElement() as HTMLButtonElement;
    const nextButton = new CreateElement(
      'button',
      { className: 'next-btn' },
      'Next'
    ).createElement() as HTMLButtonElement;

    prevButton.addEventListener('click', () => {
      if (this.page !== PAGE_INITIALIZER) {
        this.page -= 1;

        EventBus.dispatch(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, this.page);
        EventBus.dispatch(EventBusEvents.EVENT_CHANGE_GARAGE_PAGE, this.page);
        EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR_ROADS, this.page);
      }
    });

    nextButton.addEventListener('click', async () => {
      const carAmount = await CarApi.getTotalCountOfCars();

      const maxPageNumber = getMaxPageNumber(Number(carAmount), COUNT_OF_CARS_PER_PAGE);

      if (this.page >= maxPageNumber) return;

      this.page += 1;

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_CHANGE_GARAGE_PAGE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_CAR_ROADS, this.page);
    });

    garageBoxControlButtons.append(prevButton);
    garageBoxControlButtons.append(nextButton);

    garageBoxContainer.append(carRoadContainer);
    garageBoxContainer.append(garageBoxControlButtons);

    return garageBoxContainer;
  }
}

export default GarageBoxView;
