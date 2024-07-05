import CreateElement from '../../utilities/createElement';
import { getMain } from '../../utilities/domUtils';
import CarRoadsView from './garageBox/carRoads/carRoadsView';
import GarageBoxView from './garageBox/garageBoxView';
import { IGaragePageView } from './garagePage.interface';
import GaragePanelView from './garagePanel/garagePanelView';
import CarApi from '../../api/carApi/carApi.singleton';
import EventBus from '../../eventBus/eventBus.singleton';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import { WinRaceCar } from '../../model/car/car.interfaces';

import './garagePage.css';

class GaragePageView implements IGaragePageView {
  public page: number;

  public garagePanelView: GaragePanelView;

  public garageBoxView: GarageBoxView;

  constructor(page: number) {
    this.page = page;
    this.garagePanelView = new GaragePanelView();
    this.garageBoxView = new GarageBoxView();

    this.initGarageContainer();

    this.subscribeUpdateGarageTitleEvent();

    this.subscribeShowWinnerEvent();
  }

  private async initGarageContainer(): Promise<void> {
    const main = getMain();
    const garageContainer = await this.renderGarageContainer();

    main.append(garageContainer);
    // eslint-disable-next-line no-new
    new CarRoadsView(this.page);
  }

  private async renderGarageContainer(): Promise<HTMLElement> {
    const garageContainer = new CreateElement('div', {
      className: 'garage-container',
    }).createElement();

    const garageTitle = await this.renderGarageTitle();
    const garagePanel = this.garagePanelView.render();
    const garageBox = this.garageBoxView.render();
    const winnerPopup = this.renderWinnerPopup();

    garageContainer.append(garagePanel);
    garageContainer.append(garageTitle);
    garageContainer.append(garageBox);
    garageContainer.append(winnerPopup);

    return garageContainer;
  }

  private async renderGarageTitle(): Promise<HTMLElement> {
    const totalCountOfCars = await CarApi.getTotalCountOfCars();
    const garageTitle = new CreateElement(
      'div',
      {
        className: 'garage-title',
      },
      `Garage (<span class='garage-cars-amount'>${totalCountOfCars}</span>)<br>Page #<span class='garage-page-number'>${this.page}</span>`
    ).createElement();

    return garageTitle;
  }

  private renderWinnerPopup(): HTMLElement {
    const winnerPopup = new CreateElement('div', { className: 'winner-popup' }).createElement();
    const popupContent = new CreateElement('div', { className: 'popup-content' }).createElement();

    const popupText = new CreateElement('div', { className: 'winner-popup-text' }).createElement();

    const closePopupButton = new CreateElement(
      'button',
      {
        className: 'close-popup-btn',
      },
      'X'
    ).createElement();

    closePopupButton.addEventListener('click', () => {
      winnerPopup.style.display = 'none';
    });

    popupContent.append(closePopupButton);
    popupContent.append(popupText);
    winnerPopup.append(popupContent);

    return winnerPopup;
  }

  private showWinnerPopup(winner: WinRaceCar) {
    const winnerPopup = document.querySelector('.winner-popup') as HTMLElement;
    if (!winnerPopup) return;
    winnerPopup.style.display = 'flex';

    const winnerText = `Winner: ${winner.name} (${winner.time}s)`;

    const popupText = document.querySelector('.winner-popup-text');
    if (!popupText) return;
    popupText.innerHTML = winnerText;
  }

  private subscribeUpdateGarageTitleEvent(): void {
    EventBus.register(EventBusEvents.EVENT_UPDATE_GARAGE_TITLE, async (page: number) => {
      const newCarsAmount = await CarApi.getTotalCountOfCars();

      const garageCarsAmount = document.querySelector('.garage-cars-amount');
      const garagePageNumber = document.querySelector('.garage-page-number');

      if (!garageCarsAmount || !garagePageNumber) return;
      garageCarsAmount.innerHTML = `${newCarsAmount}`;
      garagePageNumber.innerHTML = `${page}`;
    });
  }

  private subscribeShowWinnerEvent(): void {
    EventBus.register(EventBusEvents.EVENT_SHOW_WINNER, async (winner: WinRaceCar) => {
      this.showWinnerPopup(winner);
    });
  }
}

export default GaragePageView;
