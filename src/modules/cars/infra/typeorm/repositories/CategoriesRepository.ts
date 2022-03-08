import { getRepository, Repository } from 'typeorm';

import { Category } from '@modules/cars/infra/typeorm/entities/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '@modules/cars/repositories/ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }
  async create({ name, description }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      description,
      name,
    });

    await this.repository.save(category);
  }

  async index(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

  findByName(name: string): Promise<Category | null> {
    const category = this.repository.findOne({
      where: {
        name,
      },
    });

    if (category) {
      return category;
    }

    return null;
  }
}

export { CategoriesRepository };
