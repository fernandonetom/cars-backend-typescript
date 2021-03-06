import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '1cf64dee42a0c4acc1dbeb2a82ab60f5');

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id.toString());

    if (!user) {
      throw new AppError('User does not exists', 401);
    }

    request.user = {
      id: user_id.toString(),
    };

    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
