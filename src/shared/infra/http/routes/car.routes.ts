import { Router } from 'express';

import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { ensureAdmin } from '@shared/infra/http/middlewares/ensureAdmin';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const carsRoutes = Router();

const createCarsController = new CreateCarController();

carsRoutes.use([ensureAuthenticated, ensureAdmin]);

carsRoutes.post('/', createCarsController.handle);

export { carsRoutes };
