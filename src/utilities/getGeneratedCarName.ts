import carModels from '../assets/carModels.json';
import carBrands from '../assets/carBrands.json';

interface CarModels {
  [key: string]: string[];
}

interface CarBrands {
  brands: string[];
}

export function getGeneratedCarName(): string {
  const models: CarModels = carModels;
  const brands: CarBrands = { brands: carBrands };

  const randomBrand: string = brands.brands[Math.floor(Math.random() * brands.brands.length)];
  const randomModel: string =
    models[randomBrand][Math.floor(Math.random() * models[randomBrand].length)];

  return `${randomBrand} ${randomModel}`;
}
