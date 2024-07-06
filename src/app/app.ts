import Game from '../model/game/game';
import { IApp } from './app.interface';

class App implements IApp {
  public game: Game;

  constructor() {
    this.game = new Game();
  }
}

export default App;
