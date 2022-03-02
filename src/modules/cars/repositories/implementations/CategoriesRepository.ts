import { getRepository, Repository } from 'typeorm';

import { Category } from '../../entities/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  // private static INSTANCE: ICategoryRepository;

  constructor() {
    this.repository = getRepository(Category);
  }

  // public static getInstance(): ICategoryRepository {
  //   if (!CategoriesRepository.INSTANCE) {
  //     CategoriesRepository.INSTANCE = new CategoriesRepository();
  //   }

  //   return CategoriesRepository.INSTANCE;
  // }

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
