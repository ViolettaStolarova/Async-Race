export function getMain(): HTMLElement {
  return document.querySelector('.main') as HTMLElement;
}

export function getCarRoadContainer(): HTMLElement {
  return document.querySelector('.car-road-container') as HTMLElement;
}

export function getGarageContainer(): HTMLElement {
  return document.querySelector('.garage-container') as HTMLElement;
}

export function getWinnersContainer(): HTMLElement {
  return document.querySelector('.winners-container') as HTMLElement;
}

export function getWinnersTable(): HTMLElement {
  return document.querySelector('.winners-table') as HTMLElement;
}

export function getCarRoad(numberOfCarRoad: number): HTMLElement {
  return document.querySelector(`.car-box-${numberOfCarRoad}`) as HTMLElement;
}
