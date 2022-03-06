import { NextFunction, Request, Response } from 'express';

import { AppError } from './AppError';

export function ErrorMiddleware(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      code: err.statusCode,
      message: err.message,
    });
  }
  return response.status(500).json({
    code: 500,
    message: `Internal server error - ${err.message}`,
  });
}
