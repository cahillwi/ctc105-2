"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const blog_controller_1 = __importDefault(require("./controllers/blog.controller"));
const blog_middleware_1 = __importDefault(require("./middleware/blog.middleware"));
const body_validation_middleware_1 = __importDefault(require("../common/middleware/body.validation.middleware"));
const express_validator_1 = require("express-validator");
const jwt_middleware_1 = __importDefault(require("../auth/middleware/jwt.middleware"));
const common_permission_middleware_1 = __importDefault(require("../common/middleware/common.permission.middleware"));
const common_permissionflag_enum_1 = require("../common/middleware/common.permissionflag.enum");
const debug_1 = __importDefault(require("debug"));
const blog_middleware_2 = __importDefault(require("./middleware/blog.middleware"));
const blog_controller_2 = __importDefault(require("./controllers/blog.controller"));
const logger = debug_1.default('app:main');
// extend the common route class to leverage all members defined in that class.
class BlogRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        // leveraging parent classes constructor through OOP inheritence
        super(app, 'BlogRoutes');
    }
    // because the parent class has configureRoutes as an abstract function this class must provide an implementation for that method.
    configureRoutes() {
        this.app.route(`/blog`)
            .get(blog_controller_1.default.listBlog)
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, common_permission_middleware_1.default.permissionFlagRequired(common_permissionflag_enum_1.PermissionFlag.PAID_PERMISSION), blog_controller_1.default.createBlog);
        //this.app.param('blogID', BlogMiddleware.extractBlogId);
        this.app
            .route(`/blog/:blogId`)
            .all(blog_middleware_1.default.validateBlogExists)
            .get(blog_controller_1.default.getBlogById)
            .delete(jwt_middleware_1.default.validJWTNeeded, blog_controller_1.default.removeBlog);
        this.app.put(`/blog/:blogId`, [
            express_validator_1.body('title').isString(),
            express_validator_1.body('body').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            //BlogMiddleware.validateSameEmailBelongToSameUser,
            //BlogMiddleware.userCantChangePermission,
            common_permission_middleware_1.default.permissionFlagRequired(common_permissionflag_enum_1.PermissionFlag.PAID_PERMISSION),
            blog_controller_1.default.put,
        ]);
        this.app.patch(`/blog/:blogId`, [
            express_validator_1.body('title').isString().optional(),
            express_validator_1.body('body').isString().optional(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            //BlogMiddleware.validatePatchEmail,
            //BlogMiddleware.userCantChangePermission,
            common_permission_middleware_1.default.permissionFlagRequired(common_permissionflag_enum_1.PermissionFlag.PAID_PERMISSION),
            blog_controller_1.default.patch,
        ]);
        this.app.route(`/blog/author/:authorId`)
            .get(blog_middleware_2.default.validateAuthorExists, blog_controller_2.default.getBlogByAuthorId);
        return this.app;
    }
}
exports.BlogRoutes = BlogRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYmxvZy9ibG9nLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLG9GQUEyRDtBQUMzRCxtRkFBMEQ7QUFFMUQsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUV6Qyx1RkFBOEQ7QUFDOUQscUhBQXFGO0FBQ3JGLGdHQUFpRjtBQUVqRixrREFBMEI7QUFDMUIsbUZBQTBEO0FBQzFELG9GQUEyRDtBQUUzRCxNQUFNLE1BQU0sR0FBb0IsZUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBRWxELCtFQUErRTtBQUMvRSxNQUFhLFVBQVcsU0FBUSx5Q0FBa0I7SUFDOUMsWUFBWSxHQUF3QjtRQUNoQyxnRUFBZ0U7UUFDaEUsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsa0lBQWtJO0lBQ2xJLGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDbEIsR0FBRyxDQUNBLHlCQUFjLENBQUMsUUFBUSxDQUMxQjthQUNBLElBQUksQ0FDRCx3QkFBYSxDQUFDLGNBQWMsRUFDNUIsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLHNDQUFvQixDQUFDLHNCQUFzQixDQUN2QywyQ0FBYyxDQUFDLGVBQWUsQ0FDakMsRUFDRCx5QkFBYyxDQUFDLFVBQVUsQ0FDNUIsQ0FBQztRQUVOLHlEQUF5RDtRQUV6RCxJQUFJLENBQUMsR0FBRzthQUNILEtBQUssQ0FBQyxlQUFlLENBQUM7YUFDdEIsR0FBRyxDQUNBLHlCQUFjLENBQUMsa0JBQWtCLENBQ3BDO2FBQ0EsR0FBRyxDQUFDLHlCQUFjLENBQUMsV0FBVyxDQUFDO2FBQy9CLE1BQU0sQ0FDSCx3QkFBYSxDQUFDLGNBQWMsRUFDNUIseUJBQWMsQ0FBQyxVQUFVLENBQ3hCLENBQUM7UUFFVixJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUU7WUFDMUIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDeEIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDdkIsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLG1EQUFtRDtZQUNuRCwwQ0FBMEM7WUFDMUMsc0NBQW9CLENBQUMsc0JBQXNCLENBQ3ZDLDJDQUFjLENBQUMsZUFBZSxDQUNqQztZQUNELHlCQUFjLENBQUMsR0FBRztTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUFlLEVBQUU7WUFDNUIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbkMsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7WUFDbEMsb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLG9DQUFvQztZQUNwQywwQ0FBMEM7WUFDMUMsc0NBQW9CLENBQUMsc0JBQXNCLENBQ3ZDLDJDQUFjLENBQUMsZUFBZSxDQUNqQztZQUNELHlCQUFjLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQzthQUNuQyxHQUFHLENBQ0EseUJBQWMsQ0FBQyxvQkFBb0IsRUFDbkMseUJBQWMsQ0FBQyxpQkFBaUIsQ0FDL0IsQ0FBQztRQUVWLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUFuRUQsZ0NBbUVDIn0=