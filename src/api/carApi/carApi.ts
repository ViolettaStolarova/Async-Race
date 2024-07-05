import { SERVER_URL } from '../../constants/serverConstants';
import Car from '../../model/car/car.interfaces';
import { ICarApi } from './carApi.interface';

class CarApi implements ICarApi {
  private serverURL: string = SERVER_URL;

  async getCars(page: number, limit: number): Promise<Car[]> {
    const response = await fetch(`${this.serverURL}/garage/?_page=${page}&_limit=${limit}`, {
      method: 'GET',
    });
    const cars = await response.json();
    return cars;
  }

  async getCar(id: number): Promise<Car> {
    const response = await fetch(`${this.serverURL}/garage/${id}`, {
      method: 'GET',
    });
    const car = await response.json();
    return car;
  }

  async getTotalCountOfCars(): Promise<string | null> {
    const page = 0;
    const limit = 0;
    const response = await fetch(`${this.serverURL}/garage/?_page=${page}&_limit=${limit}`, {
      method: 'GET',
    });
    const totalCountOfCars = response.headers.get('X-Total-Count');
    return totalCountOfCars;
  }

  async createCar(carToServer: Car): Promise<Car> {
    const response = await fetch(`${this.serverURL}/garage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carToServer),
    });
    const car = await response.json();
    return car;
  }

  async deleteCar(id: number): Promise<Car> {
    const response = await fetch(`${this.serverURL}/garage/${id}`, {
      method: 'DELETE',
    });
    const car = await response.json();
    return car;
  }

  async updateCar(id: number, carToServer: Car): Promise<Car> {
    const response = await fetch(`${this.serverURL}/garage/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carToServer),
    });
    const car = await response.json();
    return car;
  }
}

export default CarApi;
