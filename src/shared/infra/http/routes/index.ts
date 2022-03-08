import { Router } from 'express';

import { carsRoutes } from '@shared/infra/http/routes/car.routes';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/users', usersRoutes);
router.use('/specifications', specificationRoutes);
router.use('/cars', carsRoutes);
router.use(authenticateRoutes);

export { router };
