import { EventBusEvents } from '../../../../eventBus/eventBus.interface';
import EventBus from '../../../../eventBus/eventBus.singleton';
import CreateElement from '../../../../utilities/createElement';

class GarageControlButtonsView {
  public render(garagePanelContainer: HTMLElement) {
    const panelButtonsContainer = new CreateElement('div', {
      className: 'panel-btns-container',
    }).createElement();

    const raseButton = new CreateElement(
      'button',
      { className: 'race-btn' },
      'Race'
    ).createElement() as HTMLButtonElement;
    const resetButton = new CreateElement(
      'button',
      { className: 'reset-btn' },
      'Reset'
    ).createElement() as HTMLButtonElement;
    resetButton.disabled = true;
    const generateCarsButton = new CreateElement(
      'button',
      { className: 'generate-cars-btn' },
      'Generate cars'
    ).createElement();

    raseButton.addEventListener('click', () => {
      this.buttonsController(true);
      resetButton.disabled = false;
      raseButton.disabled = true;
      EventBus.dispatch(EventBusEvents.EVENT_START_RACE);
    });

    resetButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_STOP_RACE);
      raseButton.disabled = false;
      resetButton.disabled = true;
      this.buttonsController(false);
    });

    generateCarsButton.addEventListener('click', () => {
      EventBus.dispatch(EventBusEvents.EVENT_GENERATE_CARS);
    });

    panelButtonsContainer.append(raseButton);
    panelButtonsContainer.append(resetButton);
    panelButtonsContainer.append(generateCarsButton);

    garagePanelContainer.append(panelButtonsContainer);
  }

  private buttonsController(status: boolean): void {
    const startBtns = document.querySelectorAll('.start-btn');
    startBtns.forEach((startBtn) => {
      const button = startBtn as HTMLButtonElement;
      button.disabled = status;
    });

    const winnersButton = document.querySelector('.winners-btn') as HTMLButtonElement;
    winnersButton.disabled = status;
  }
}

export default GarageControlButtonsView;
