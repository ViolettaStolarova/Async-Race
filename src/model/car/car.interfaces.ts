export default interface Car {
  name: string;
  color: string;
  id?: number;
}

export interface CarEngine {
  velocity: number;
  distance: number;
}

export interface CarDriveStatus {
  success: boolean;
}

export interface Winner {
  id?: number;
  wins: number;
  time: number;
}

export interface WinRaceCar {
  id: number;
  name: string;
  time: number;
}

export interface ICar {
  car: Car;
  startEngine(car: HTMLElement, isRace: boolean): Promise<void>;
  stopEngine(car: HTMLElement): Promise<void>;
}
