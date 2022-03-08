import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { CarsRepositoryInMemory } from '@modules/cars/repositories/inMemory/CarsRepositoryInMemory';
import { CreateCarUseCase } from '@modules/cars/useCases/createCar/CreateCarUseCase';
import { AppError } from '@shared/errors/AppError';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('Create car', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    createCarUseCase = new CreateCarUseCase(carsRepositoryInMemory);
  });

  it('should be able to create a car', async () => {
    const car: ICreateCarDTO = {
      name: 'Car name',
      description: 'Car name description',
      daily_rate: 10,
      license_plate: 'ABC-0000',
      fine_amount: 1,
      brand: 'Fake Brand',
      category_id: 'ui',
    };

    const carCreated = await createCarUseCase.execute(car);

    expect(carCreated).toHaveProperty('id');
  });

  it('should not be able to create a car with exists license_plate', async () => {
    expect(async () => {
      const car1: ICreateCarDTO = {
        name: 'Car name',
        description: 'Car name description',
        daily_rate: 10,
        license_plate: 'ABC-0000',
        fine_amount: 1,
        brand: 'Fake Brand',
        category_id: 'ui',
      };

      await createCarUseCase.execute(car1);

      const car2: ICreateCarDTO = {
        name: 'Car name',
        description: 'Car name description',
        daily_rate: 10,
        license_plate: 'ABC-0000',
        fine_amount: 1,
        brand: 'Fake Brand',
        category_id: 'ui',
      };

      await createCarUseCase.execute(car2);
    }).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a car with available true by default', async () => {
    const car: ICreateCarDTO = {
      name: 'Car name',
      description: 'Car name description',
      daily_rate: 10,
      license_plate: 'ABC-0000',
      fine_amount: 1,
      brand: 'Fake Brand',
      category_id: 'ui',
    };

    const carCreated = await createCarUseCase.execute(car);

    expect(carCreated).toHaveProperty('available');

    expect(carCreated.available).toBe(true);
  });
});
