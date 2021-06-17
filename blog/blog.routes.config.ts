import {CommonRoutesConfig} from '../common/common.routes.config'; 
import BlogController from './controllers/blog.controller'; 
import BlogMiddleware from './middleware/blog.middleware'; 
import express from 'express'; 
import BodyValidationMiddleware from '../common/middleware/body.validation.middleware'; 
import { body } from 'express-validator'; 

import jwtMiddleware from '../auth/middleware/jwt.middleware'; 
import permissionMiddleware from '../common/middleware/common.permission.middleware'; 
import { PermissionFlag } from '../common/middleware/common.permissionflag.enum'; 

import debug from 'debug';

const logger: debug.IDebugger = debug('app:main');

// extend the common route class to leverage all members defined in that class.
export class BlogRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        // leveraging parent classes constructor through OOP inheritence
        super(app, 'BlogRoutes');
    }

    // because the parent class has configureRoutes as an abstract function this class must provide an implementation for that method.
    configureRoutes() {

        this.app.route(`/blog`)
            .get(
                BlogController.listBlog
            )
            .post(
                jwtMiddleware.validJWTNeeded,
                BodyValidationMiddleware.verifyBodyFieldsErrors,
                //BlogMiddleware.validateSameEmailDoesntExist,
                permissionMiddleware.permissionFlagRequired(
                    PermissionFlag.PAID_PERMISSION
                ),
                BlogController.createBlog
            );

        //this.app.param('blogID', BlogMiddleware.extractBlogId);
    
        this.app
            .route(`/blog/:blogId`)
            .all(
                BlogMiddleware.validateBlogExists,
            )
            .get(BlogController.getBlogById)
            .delete(
                jwtMiddleware.validJWTNeeded,
                BlogController.removeBlog
                );

        this.app.put(`/blog/:blogId`, [
            body('title').isString(),
            body('body').isString(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            //BlogMiddleware.validateSameEmailBelongToSameUser,
            //BlogMiddleware.userCantChangePermission,
            permissionMiddleware.permissionFlagRequired(
                PermissionFlag.PAID_PERMISSION
            ),
            BlogController.put,
        ]);

        this.app.patch(`/blog/:blogId`, [
            body('title').isString().optional(),
            body('body').isString().optional(),
            BodyValidationMiddleware.verifyBodyFieldsErrors,
            //BlogMiddleware.validatePatchEmail,
            //BlogMiddleware.userCantChangePermission,
            permissionMiddleware.permissionFlagRequired(
                PermissionFlag.PAID_PERMISSION
            ),
            BlogController.patch,
        ]);
    
        return this.app;
    }
}