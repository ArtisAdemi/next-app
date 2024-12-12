import { Request, Response, NextFunction } from 'express';

export function checkRole(role: string) {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user;
        if (user && user.role === role) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden' });
        }
    };
} 