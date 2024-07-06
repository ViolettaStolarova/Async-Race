import WinnersApi from '../../api/winnersApi/winnersApi.singleton';
import { PAGE_INITIALIZER, COUNT_OF_WINNERS_PER_PAGE } from '../../constants/gameConstants';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import { WinRaceCar, Winner } from '../car/car.interfaces';
import { IWinner } from './winners.interface';

class Winners implements IWinner {
  public page: number;

  public winners: Winner[] = [];

  public countOfWins = 1;

  constructor() {
    this.page = PAGE_INITIALIZER;

    this.getWinners();

    this.subscribeAddNewWinnerEvent();
    this.subscribeDeleteCarEvent();

    this.subscribeChangeWinnersPageEvent();
  }

  private async getWinners() {
    this.winners = [];
    const winners = await WinnersApi.getWinners(this.page, COUNT_OF_WINNERS_PER_PAGE);

    winners.forEach((winner) => {
      this.winners.push(winner);
    });
  }

  private findWinnerById(id: number): Winner | undefined {
    return this.winners.find((winner) => winner.id === id);
  }

  private subscribeAddNewWinnerEvent(): void {
    EventBus.register(EventBusEvents.EVENT_ADD_NEW_WINNER, async (winRaceCar: WinRaceCar) => {
      const winner = this.findWinnerById(winRaceCar.id);

      if (winner) {
        if (winRaceCar.time < winner.time) {
          winner.time = winRaceCar.time;
        }

        await WinnersApi.updateWinner(winRaceCar.id, {
          wins: (winner.wins += 1),
          time: winner.time,
        });
      } else {
        await WinnersApi.createWinner({
          id: winRaceCar.id,
          wins: this.countOfWins,
          time: winRaceCar.time,
        });
      }

      this.getWinners();

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TABLE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TITLE, this.page);
    });
  }

  private subscribeDeleteCarEvent() {
    EventBus.register(EventBusEvents.EVENT_DELETE_CAR, async (carId: number) => {
      await WinnersApi.deleteWinner(carId);

      this.getWinners();

      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TABLE, this.page);
      EventBus.dispatch(EventBusEvents.EVENT_UPDATE_WINNERS_TITLE, this.page);
    });
  }

  private subscribeChangeWinnersPageEvent() {
    EventBus.register(EventBusEvents.EVENT_CHANGE_WINNERS_PAGE, (page: number) => {
      this.page = page;
      this.getWinners();
    });
  }
}

export default Winners;
