import { AppError } from '@errors/AppError';
import { CategoriesRepositoriesInMemory } from '@modules/cars/repositories/inMemory/CategoriesRepositoryInMemory';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepository: CategoriesRepositoriesInMemory;

describe('Create a category', () => {
  beforeEach(() => {
    categoriesRepository = new CategoriesRepositoriesInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);
  });

  it('should be able to create a new category', async () => {
    const category = {
      name: 'Category test',
      description: 'Category description',
    };

    await createCategoryUseCase.execute(category);

    const categoryCreated = await categoriesRepository.findByName(
      category.name
    );

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category with existing name', async () => {
    expect(async () => {
      const category = {
        name: 'Category test',
        description: 'Category description',
      };

      await createCategoryUseCase.execute(category);

      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
