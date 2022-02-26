import { Category } from '../../model/Category';
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from '../ICategoryRepository';

class CategoriesRepository implements ICategoryRepository {
  private categories: Category[];

  private static INSTANCE: ICategoryRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): ICategoryRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }

    return CategoriesRepository.INSTANCE;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });

    this.categories.push(category);
  }

  index(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category | null {
    const category = this.categories.find((item) => item.name === name);

    if (category) {
      return category;
    }

    return null;
  }
}

export { CategoriesRepository };