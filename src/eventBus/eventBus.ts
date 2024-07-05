import { IEventBus, Subscriber, Registry } from './eventBus.interface';

class EventBus implements IEventBus {
  private subscribers: Subscriber;

  private static nextId = 0;

  constructor() {
    this.subscribers = {};
  }

  dispatch<T>(event: string, arg?: T): void {
    const subscriber = this.subscribers[event];

    if (subscriber === undefined) {
      return;
    }

    Object.keys(subscriber).forEach((key) => {
      subscriber[key](arg);
    });
  }

  register<T>(event: string, callback: (arg: T) => void): Registry {
    const id = this.getNextId();
    if (!this.subscribers[event]) this.subscribers[event] = {};

    this.subscribers[event][id] = callback;

    return {
      unregister: () => {
        delete this.subscribers[event][id];

        if (Object.keys(this.subscribers[event]).length === 0) {
          delete this.subscribers[event];
        }
      },
    };
  }

  private getNextId(): number {
    EventBus.nextId += 1;
    return EventBus.nextId;
  }
}

export default EventBus;
