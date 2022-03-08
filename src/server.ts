import './database';
import './shared/container';
import 'express-async-errors';

import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { ErrorMiddleware } from '@errors/ErrorMiddleware';

import { router } from './routes';
import swaggerFile from './swagger.json';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(ErrorMiddleware);

app.listen(3000, () => console.log('Server is running'));
