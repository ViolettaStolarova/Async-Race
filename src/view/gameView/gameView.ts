import { IGameView } from './gameView.interface';
import CreateElement from '../../utilities/createElement';
import { getGarageContainer, getWinnersContainer } from '../../utilities/domUtils';
import GaragePageView from '../garagePage/garagePageView';
import WinnersPageView from '../winnersPage/winnersPageView';
import { PAGE_INITIALIZER } from '../../constants/gameConstants';

import './gameView.css';

class GameView implements IGameView {
  public garagePageView: GaragePageView;

  public winnersPageView: WinnersPageView;

  constructor() {
    const main = this.renderMain();
    document.body.append(main);

    this.garagePageView = new GaragePageView(PAGE_INITIALIZER);
    this.winnersPageView = new WinnersPageView(PAGE_INITIALIZER);

    const header = this.renderHeader();
    document.body.prepend(header);
  }

  private renderHeader(): HTMLElement {
    const header = new CreateElement('header', { className: 'header' }).createElement();

    const navigationContainer = new CreateElement('div', {
      className: 'navigation-container',
    }).createElement();

    const toGarageButton = new CreateElement(
      'button',
      { className: 'garage-btn' },
      'Garage'
    ).createElement();
    const toWinnersButton = new CreateElement(
      'button',
      { className: 'winners-btn' },
      'Winners'
    ).createElement();

    toGarageButton.addEventListener('click', () => {
      this.showGarage();
    });
    toWinnersButton.addEventListener('click', () => {
      this.showWinners();
    });

    navigationContainer.append(toGarageButton);
    navigationContainer.append(toWinnersButton);

    header.append(navigationContainer);

    return header;
  }

  private renderMain(): HTMLElement {
    const main = new CreateElement('main', { className: 'main' }).createElement();

    return main;
  }

  private showGarage(): void {
    const winnersContainer = getWinnersContainer();
    const garageContainer = getGarageContainer();

    winnersContainer.classList.add('hide');
    garageContainer.classList.remove('hide');
  }

  private showWinners(): void {
    const winnersContainer = getWinnersContainer();
    const garageContainer = getGarageContainer();

    winnersContainer.classList.remove('hide');
    garageContainer.classList.add('hide');
  }
}

export default GameView;
