import { Request, Response, NextFunction } from 'express';

const handleAsync = (
  callback: (
    req: Request,
    Response: Response,
    next: NextFunction,
  ) => Promise<void>,
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    next(error);
  }
};

export { handleAsync };
