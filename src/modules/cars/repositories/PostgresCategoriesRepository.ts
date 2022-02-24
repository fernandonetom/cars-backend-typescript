import { Category } from '../model/Category';
import { ICategoryRepository, ICreateCategoryDTO } from './ICategoryRepository';

class PostgresCategoriesRepositories implements ICategoryRepository {
  findByName(name: string): Category {
    console.log(name);

    return null;
  }
  index(): Category[] {
    return null;
  }
  create({ name, description }: ICreateCategoryDTO): void {
    return null;
  }
}

export { PostgresCategoriesRepositories };
