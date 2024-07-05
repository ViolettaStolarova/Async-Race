import GameView from '../../view/gameView/gameView';
import Garage from '../garage/garage';
import Winners from '../winners/winners';

export interface IGame {
  garage: Garage;
  winners: Winners;
  gameView: GameView;
}
