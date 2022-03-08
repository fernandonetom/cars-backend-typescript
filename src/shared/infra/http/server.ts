import 'reflect-metadata';
import '@shared/container';
import 'express-async-errors';

import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { ErrorMiddleware } from '@shared/errors/ErrorMiddleware';

import swaggerFile from '../../../swagger.json';
import connection from '../typeorm';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(router);

app.use(ErrorMiddleware);

connection().then(() => console.log('Typeorm connected'));

app.listen(3000, () => console.log('Server is running'));
