import { CarDriveStatus, CarEngine } from '../../model/car/car.interfaces';

export interface IEngineApi {
  startEngine(id: number): Promise<CarEngine>;
  stopEngine(id: number): Promise<CarEngine>;
  startDrive(id: number): Promise<CarDriveStatus>;
}
