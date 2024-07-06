/* eslint-disable no-param-reassign */
import EngineApi from '../../api/engineApi/engineApi.singleton';
import { MILLISECONDS } from '../../constants/gameConstants';
import { EventBusEvents } from '../../eventBus/eventBus.interface';
import EventBus from '../../eventBus/eventBus.singleton';
import CarFromServer, { ICar, WinRaceCar } from './car.interfaces';

class Car implements ICar {
  public car: CarFromServer;

  public isRace: boolean;

  constructor(car: CarFromServer) {
    this.car = car;
    this.isRace = false;
  }

  async startEngine(car: HTMLElement, isRace: boolean): Promise<void> {
    if (!car) return;
    this.isRace = isRace;
    const carEngine = await EngineApi.startEngine(this.car.id!);

    const animationDuration = carEngine.distance / carEngine.velocity;

    this.startCarAnimation(animationDuration, car);
  }

  async startCarAnimation(animationDuration: number, car: HTMLElement): Promise<void> {
    let isCarFinished = false;
    let isBrokeEngine = false;

    car.classList.add('car-drive');

    car.style.animationDuration = `${animationDuration / MILLISECONDS}s`;

    car.addEventListener('animationend', () => {
      isCarFinished = true;
      this.stopCarAnimation(car, isBrokeEngine, isCarFinished);
    });

    try {
      await EngineApi.startDrive(this.car.id!);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(`The ${this.car.name} engine broke down`);
      isBrokeEngine = true;
      this.stopCarAnimation(car, isBrokeEngine, isCarFinished);
    }
  }

  private async stopCarAnimation(
    car: HTMLElement,
    isBrokeEngine: boolean,
    isCarFinished: boolean
  ): Promise<void> {
    if (isCarFinished && this.isRace) {
      const winRaceCar = {
        id: this.car.id,
        name: this.car.name,
        time: parseFloat(parseFloat(car.style.animationDuration).toFixed(2)),
      } as WinRaceCar;

      EventBus.dispatch(EventBusEvents.EVENT_CAR_WIN_IN_RACE, winRaceCar);
    }

    if (isBrokeEngine) {
      this.stopAnimation(car);
    }
  }

  private stopAnimation(car: HTMLElement): void {
    car.style.animationPlayState = 'paused';
  }

  async stopEngine(car: HTMLElement): Promise<void> {
    await EngineApi.stopEngine(this.car.id!);

    this.removeAnimation(car);
    this.resetAnimation(car);
  }

  private removeAnimation(car: HTMLElement): void {
    car.classList.remove('car-drive');
  }

  private resetAnimation(car: HTMLElement): void {
    car.style.animationPlayState = '';
    car.style.animationDuration = '';
  }
}

export default Car;
