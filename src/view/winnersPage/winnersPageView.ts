import CreateElement from '../../utilities/createElement';
import { getMain } from '../../utilities/domUtils';
import { IWinnersPageView } from './winnersPage.interface';
import WinnersApi from '../../api/winnersApi/winnersApi.singleton';
import WinnersBoxView from './winnersBox/winnersBoxView';
import WinnersTableView from './winnersBox/winnersTable/winnersTableView';
import EventBus from '../../eventBus/eventBus.singleton';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import { PAGE_INITIALIZER, COUNT_OF_WINNERS_PER_PAGE } from '../../constants/gameConstants';
import { getMaxPageNumber } from '../../utilities/getMaxPageNumber';

import './winnersPage.css';

class WinnersPageView implements IWinnersPageView {
  public page: number;

  public winnersBoxView: WinnersBoxView;

  constructor(page: number) {
    this.page = page;
    this.winnersBoxView = new WinnersBoxView();

    this.initWinnersContainer();

    this.subscribeUpdateWinnersTitleEvent();
  }

  private async initWinnersContainer(): Promise<void> {
    const main = getMain();
    const winnersContainer = await this.renderWinnersContainer();

    main.append(winnersContainer);

    // eslint-disable-next-line no-new
    new WinnersTableView(this.page);
  }

  private async renderWinnersContainer(): Promise<HTMLElement> {
    const winnersContainer = new CreateElement('div', {
      className: 'winners-container hide',
    }).createElement();

    const winnersTitle = await this.renderWinnersTitle();

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

        EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TITLE, this.page);
        EventBus.dispatch(EventBusEvents.EVENT_CHANGE_WINNERS_PAGE, this.page);
        EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TABLE, this.page);
      }
    });

    nextButton.addEventListener('click', async () => {
      const winnersAmount = await WinnersApi.getTotalCountOfWinners();

      const maxPageNumber = getMaxPageNumber(Number(winnersAmount), COUNT_OF_WINNERS_PER_PAGE);

      if (this.page >= maxPageNumber) return;

      this.page += 1;

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TITLE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_CHANGE_WINNERS_PAGE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TABLE, this.page);
    });

    const winnersBox = this.winnersBoxView.render();

    garageBoxControlButtons.append(prevButton);
    garageBoxControlButtons.append(nextButton);

    winnersContainer.append(winnersTitle);
    winnersContainer.append(winnersBox);
    winnersContainer.append(garageBoxControlButtons);

    return winnersContainer;
  }

  private async renderWinnersTitle(): Promise<HTMLElement> {
    const totalCountOfWinners = await WinnersApi.getTotalCountOfWinners();
    const garageTitle = new CreateElement(
      'div',
      {
        className: 'winners-title',
      },
      `Winners (<span class='winners-cars-amount'>${totalCountOfWinners}</span>)<br>Page #<span class='winners-page-number'>${this.page}</span>`
    ).createElement();

    return garageTitle;
  }

  private subscribeUpdateWinnersTitleEvent(): void {
    EventBus.register(EventBusEvents.EVENT_UPDATE_WINNERS_TITLE, async (page: number) => {
      const totalCountOfWinners = await WinnersApi.getTotalCountOfWinners();

      const winnersCarsAmount = document.querySelector('.winners-cars-amount');
      const winnersPageNumber = document.querySelector('.winners-page-number');

      if (!winnersCarsAmount || !winnersPageNumber) return;
      winnersCarsAmount.innerHTML = `${totalCountOfWinners}`;
      winnersPageNumber.innerHTML = `${page}`;
    });
  }
}

export default WinnersPageView;
