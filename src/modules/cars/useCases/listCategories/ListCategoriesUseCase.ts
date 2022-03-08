import { inject, injectable } from 'tsyringe';

import { Category } from '@modules/cars/entities/Category';
import { ICategoryRepository } from '@modules/cars/repositories/ICategoryRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.index();

    return categories;
  }
}

export { ListCategoryUseCase };
