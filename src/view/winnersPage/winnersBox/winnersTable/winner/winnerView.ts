import Car, { Winner } from '../../../../../model/car/car.interfaces';
import CarApi from '../../../../../api/carApi/carApi.singleton';
import CreateElement from '../../../../../utilities/createElement';
import { getWinnersTable } from '../../../../../utilities/domUtils';
import CarView from '../../../../garagePage/garageBox/carRoads/carRoad/car/carView';

class WinnerView {
  private winner: Winner;

  static id = 1;

  constructor(winner: Winner) {
    this.winner = winner;

    this.renderTableRowContainer(this.winner);
  }

  private async renderTableRowContainer(winner: Winner): Promise<void> {
    const winnersTable = getWinnersTable();

    const winnerCar = new CarView(await this.getWinnerCarById(winner.id!));
    const carImageElement = winnerCar.renderCar();
    const carModelElement = winnerCar.renderCarModel();

    carImageElement.classList.add('win-car');
    carModelElement.classList.add('win-model');

    const winnersTableRow = new CreateElement('div', { className: 'winner-row' }).createElement();

    winnersTableRow.append(
      new CreateElement('div', { className: 'id' }, `${WinnerView.id}`).createElement()
    );

    WinnerView.id += 1;

    winnersTableRow.append(carImageElement);
    winnersTableRow.append(carModelElement);
    winnersTableRow.append(
      new CreateElement('div', { className: 'car-wins' }, `${winner.wins}`).createElement()
    );
    winnersTableRow.append(
      new CreateElement('div', { className: 'car-time' }, `${winner.time} s`).createElement()
    );

    winnersTable.append(winnersTableRow);
  }

  private async getWinnerCarById(winnerId: number): Promise<Car> {
    const winnerCar = await CarApi.getCar(winnerId);

    return winnerCar;
  }
}

export default WinnerView;
