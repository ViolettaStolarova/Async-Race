import { Winner } from '../../model/car/car.interfaces';

export interface IWinnersApi {
  getWinners(page: number, limit: number): Promise<Winner[]>;
  getWinner(id: number): Promise<Winner>;
  getTotalCountOfWinners(): Promise<string | null>;
  createWinner(winnerToServer: Winner): Promise<Winner>;
  deleteWinner(id: number): Promise<Winner>;
  updateWinner(id: number, winnerToServer: Winner): Promise<Winner>;
}
