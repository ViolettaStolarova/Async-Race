import { SERVER_URL } from '../../constants/serverConstants';
import { Winner } from '../../model/car/car.interfaces';
import { IWinnersApi } from './winnersApi.interface';

class WinnersApi implements IWinnersApi {
  private serverURL: string = SERVER_URL;

  async getWinners(page: number, limit: number): Promise<Winner[]> {
    const response = await fetch(`${this.serverURL}/winners/?_page=${page}&_limit=${limit}`, {
      method: 'GET',
    });
    const winners = await response.json();
    return winners;
  }

  async getWinner(id: number): Promise<Winner> {
    const response = await fetch(`${this.serverURL}/winners/${id}`, {
      method: 'GET',
    });
    const winner = await response.json();
    return winner;
  }

  async getTotalCountOfWinners(): Promise<string | null> {
    const page = 0;
    const limit = 0;
    const response = await fetch(`${this.serverURL}/winners/?_page=${page}&_limit=${limit}`, {
      method: 'GET',
    });
    const totalCountOfWinners = response.headers.get('X-Total-Count');
    return totalCountOfWinners;
  }

  async createWinner(winnerToServer: Winner): Promise<Winner> {
    const response = await fetch(`${this.serverURL}/winners`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerToServer),
    });
    const winner = await response.json();
    return winner;
  }

  async deleteWinner(id: number): Promise<Winner> {
    const response = await fetch(`${this.serverURL}/winners/${id}`, {
      method: 'DELETE',
    });
    const winner = await response.json();
    return winner;
  }

  async updateWinner(id: number, winnerToServer: Winner): Promise<Winner> {
    const response = await fetch(`${this.serverURL}/winners/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(winnerToServer),
    });
    const winner = await response.json();
    return winner;
  }
}

export default WinnersApi;
