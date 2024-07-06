import WinnersApi from '../../../../api/winnersApi/winnersApi.singleton';
import { getWinnersTable } from '../../../../utilities/domUtils';
import WinnerView from './winner/winnerView';
import EventBus from '../../../../eventBus/eventBus.singleton';
import { EventBusEvents } from '../../../../eventBus/eventBus.interface';
import { PAGE_INITIALIZER, COUNT_OF_WINNERS_PER_PAGE } from '../../../../constants/gameConstants';

class WinnersTableView {
  private page: number;

  constructor(page: number) {
    this.page = page;

    this.renderWinnersTable(this.page);

    this.subscribeUpdateWinnersTableEvent();
  }

  private async renderWinnersTable(page: number) {
    const winnersTable = getWinnersTable();
    if (!winnersTable) return;

    winnersTable.innerHTML = '';

    const winners = await WinnersApi.getWinners(page, COUNT_OF_WINNERS_PER_PAGE);

    // eslint-disable-next-line no-new
    winners.map((winner) => new WinnerView(winner));
  }

  private subscribeUpdateWinnersTableEvent(): void {
    EventBus.register(EventBusEvents.EVENT_UPDATE_WINNERS_TABLE, (page: number) => {
      if (page !== PAGE_INITIALIZER) {
        const calculatedIdForNewTablePage = this.getCalculatedIdForNewTablePage(page);

        WinnerView.id = calculatedIdForNewTablePage;
      } else WinnerView.id = PAGE_INITIALIZER;
      this.renderWinnersTable(page);
    });
  }

  private getCalculatedIdForNewTablePage(page: number): number {
    const calculatedIdForNewTablePage = (page - 1) * COUNT_OF_WINNERS_PER_PAGE + PAGE_INITIALIZER;

    return calculatedIdForNewTablePage;
  }
}

export default WinnersTableView;
