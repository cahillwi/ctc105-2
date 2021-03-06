import express from 'express';
import userService from '../services/users.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:users-Middleware');

//this file contains basic algorithms to ensure items like the email a user is attempting to use to create a user record doesn't already exist
class UsersMiddleware {

    async validateSameEmailDoesntExist(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.getUserByEmail(req.body.email);
        if (user) {
            res.status(400).send({ error: `User email already exists` });
        } else {
            next();
        }
    }
    
    async validateSameEmailBelongToSameUser(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        if (res.locals.user._id === req.params.userId) {
            next();
        } else {
            res.status(400).send({ error: `Invalid email` });
        }
    }
    
    // Here we need to use an arrow function to bind `this` correctly
    validatePatchEmail = async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) => {
        if (req.body.email) {
            log('Validating email', req.body.email);
    
            this.validateSameEmailBelongToSameUser(req, res, next);
        } else {
            next();
        }
    };
    
    async validateUserExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.readById(req.params.userId);
        if (user) {
            res.locals.user = user;
            next();
        } else {
            res.status(404).send({
                error: `User ${req.params.userId} not found`,
            });
        }
    }
    async extractUserId(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        log('Body being set to ', req.params.userId);
        req.body.id = req.params.userId;
        log('Body set to ', req.body.id);
        next();
    }

    async userCantChangePermission(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const user = await userService.readById(req.params.userId);
        res.locals.user = user;
        if (
            'permissionFlags' in req.body &&
            req.body.permissionFlags !== res.locals.user.permissionFlags
        ) {
            res.status(403).send({
                errors: ['User cannot change permission flags'],
            });
        } else {
            next();
        }
    }

}

export default new UsersMiddleware();