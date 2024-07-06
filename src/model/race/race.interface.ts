import Car from '../car/car';

export interface IRace {
  page: number;
  cars: Car[];
  isRace: boolean;
  isWinnerShown: boolean;
  getCars(page: number): Promise<void>;
}
