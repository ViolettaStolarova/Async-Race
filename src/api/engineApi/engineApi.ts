import { SERVER_URL } from '../../constants/serverConstants';
import { CarDriveStatus, CarEngine } from '../../model/car/car.interfaces';
import { IEngineApi } from './engineApi.interface';

class EngineApi implements IEngineApi {
  private serverURL: string = SERVER_URL;

  async startEngine(id: number): Promise<CarEngine> {
    const status = 'started';
    const response = await fetch(`${this.serverURL}/engine/?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const carEngine = await response.json();
    return carEngine;
  }

  async stopEngine(id: number): Promise<CarEngine> {
    const status = 'stopped';
    const response = await fetch(`${this.serverURL}/engine/?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const carEngine = await response.json();
    return carEngine;
  }

  async startDrive(id: number): Promise<CarDriveStatus> {
    const status = 'drive';
    const response = await fetch(`${this.serverURL}/engine/?id=${id}&status=${status}`, {
      method: 'PATCH',
    });
    const carDriveStatus = await response.json();
    return carDriveStatus;
  }
}

export default EngineApi;
