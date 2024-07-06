import { Winner } from '../car/car.interfaces';

export interface IWinner {
  page: number;
  winners: Winner[];
  countOfWins: number;
}
