import { Category } from '../../entities/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepositoriesInMemory implements ICategoryRepository {
  private categories: Category[] = [];

  async findByName(name: string): Promise<Category> {
    return this.categories.find((category) => category.name === name);
  }
  async index(): Promise<Category[]> {
    return this.categories;
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);
  }
}

export { CategoriesRepositoriesInMemory };
