import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UsersRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(token, '1cf64dee42a0c4acc1dbeb2a82ab60f5');

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id.toString());

    if (!user) {
      throw new Error('User does not exists');
    }

    next();
  } catch (error) {
    throw new Error('Invalid token');
  }
}
