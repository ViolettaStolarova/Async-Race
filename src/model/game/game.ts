import GameView from '../../view/gameView/gameView';
import Garage from '../garage/garage';
import Winners from '../winners/winners';
import { IGame } from './game.interface';

class Game implements IGame {
  public garage: Garage;

  public winners: Winners;

  public gameView: GameView;

  constructor() {
    this.garage = new Garage();
    this.winners = new Winners();

    this.gameView = new GameView();
  }
}

export default Game;
