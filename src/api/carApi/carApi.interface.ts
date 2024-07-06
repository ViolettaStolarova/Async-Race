import Car from '../../model/car/car.interfaces';

export interface ICarApi {
  getCars(page: number, limit: number): Promise<Car[]>;
  getCar(id: number): Promise<Car>;
  getTotalCountOfCars(): Promise<string | null>;
  createCar(carToServer: Car): Promise<Car>;
  deleteCar(id: number): Promise<Car>;
  updateCar(id: number, carToServer: Car): Promise<Car>;
}
