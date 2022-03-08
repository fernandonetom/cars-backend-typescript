import { NextFunction, Request, Response } from 'express';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { AppError } from '@shared/errors/AppError';

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  try {
    const { id } = request.user;

    const usersRepository = new UsersRepository();
    const user = await usersRepository.findById(id);

    if (!user.isAdmin) throw new AppError("User isn't an admin", 401);
    next();
  } catch (error) {
    throw new AppError('Invalid token', 401);
  }
}
