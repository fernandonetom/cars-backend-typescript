import { Category } from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  findByName(name: string): Category;
  index(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoryRepository, ICreateCategoryDTO };
