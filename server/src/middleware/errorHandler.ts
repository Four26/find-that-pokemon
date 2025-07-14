import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, stack } = err;
    const statusCode = res.statusCode || 500;

    console.log(err.message);
    res.status(statusCode).json({
        message,
        stack,
        name
    });
}