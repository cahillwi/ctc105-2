import {CommonRoutesConfig} from '../common/common.routes.config';
import UsersController from './controllers/users.controller';
import UsersMiddleware from './middleware/users.middleware';
import express from 'express';

// extend the common route class to leverage all members defined in that class.
export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        // leveraging parent classes constructor through OOP inheritence
        super(app, 'UsersRoutes');
    }

    // because the parent class has configureRoutes as an abstract function this class must provide an implementation for that method.
    configureRoutes() {

        this.app.route(`/users`)
            .get(UsersController.listUsers)
            .post(
                UsersMiddleware.validateRequiredUserBodyFields,
                UsersMiddleware.validateSameEmailDoesntExist,
                UsersController.createUser
            );

        this.app.param('userID', UsersMiddleware.extractUserId);
    
        this.app
            .route(`/users/:userId`)
            .all(UsersMiddleware.validateUserExists)
            .get(UsersController.getUserById)
            .delete(UsersController.removeUser);

        this.app.put(`/users/:userId`, [
            UsersMiddleware.validateRequiredUserBodyFields,
            UsersMiddleware.validateSameEmailBelongToSameUser,
            UsersController.put,
        ]);

        this.app.patch(`/users/:userId`, [
            UsersMiddleware.validatePatchEmail,
            UsersController.patch,
        ]);
    
        return this.app;
    }
}