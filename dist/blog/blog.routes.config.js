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
            .post(jwt_middleware_1.default.validJWTNeeded, body_validation_middleware_1.default.verifyBodyFieldsErrors, 
        //BlogMiddleware.validateSameEmailDoesntExist,
        common_permission_middleware_1.default.permissionFlagRequired(common_permissionflag_enum_1.PermissionFlag.PAID_PERMISSION), blog_controller_1.default.createBlog);
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
        return this.app;
    }
}
exports.BlogRoutes = BlogRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vYmxvZy9ibG9nLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEseUVBQWtFO0FBQ2xFLG9GQUEyRDtBQUMzRCxtRkFBMEQ7QUFFMUQsaUhBQXVGO0FBQ3ZGLHlEQUF5QztBQUV6Qyx1RkFBOEQ7QUFDOUQscUhBQXFGO0FBQ3JGLGdHQUFpRjtBQUVqRixrREFBMEI7QUFFMUIsTUFBTSxNQUFNLEdBQW9CLGVBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVsRCwrRUFBK0U7QUFDL0UsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBQzlDLFlBQVksR0FBd0I7UUFDaEMsZ0VBQWdFO1FBQ2hFLEtBQUssQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGtJQUFrSTtJQUNsSSxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ2xCLEdBQUcsQ0FDQSx5QkFBYyxDQUFDLFFBQVEsQ0FDMUI7YUFDQSxJQUFJLENBQ0Qsd0JBQWEsQ0FBQyxjQUFjLEVBQzVCLG9DQUF3QixDQUFDLHNCQUFzQjtRQUMvQyw4Q0FBOEM7UUFDOUMsc0NBQW9CLENBQUMsc0JBQXNCLENBQ3ZDLDJDQUFjLENBQUMsZUFBZSxDQUNqQyxFQUNELHlCQUFjLENBQUMsVUFBVSxDQUM1QixDQUFDO1FBRU4seURBQXlEO1FBRXpELElBQUksQ0FBQyxHQUFHO2FBQ0gsS0FBSyxDQUFDLGVBQWUsQ0FBQzthQUN0QixHQUFHLENBQ0EseUJBQWMsQ0FBQyxrQkFBa0IsQ0FDcEM7YUFDQSxHQUFHLENBQUMseUJBQWMsQ0FBQyxXQUFXLENBQUM7YUFDL0IsTUFBTSxDQUNILHdCQUFhLENBQUMsY0FBYyxFQUM1Qix5QkFBYyxDQUFDLFVBQVUsQ0FDeEIsQ0FBQztRQUVWLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRTtZQUMxQix3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN4Qix3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRTtZQUN2QixvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0MsbURBQW1EO1lBQ25ELDBDQUEwQztZQUMxQyxzQ0FBb0IsQ0FBQyxzQkFBc0IsQ0FDdkMsMkNBQWMsQ0FBQyxlQUFlLENBQ2pDO1lBQ0QseUJBQWMsQ0FBQyxHQUFHO1NBQ3JCLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQWUsRUFBRTtZQUM1Qix3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNuQyx3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxvQ0FBd0IsQ0FBQyxzQkFBc0I7WUFDL0Msb0NBQW9DO1lBQ3BDLDBDQUEwQztZQUMxQyxzQ0FBb0IsQ0FBQyxzQkFBc0IsQ0FDdkMsMkNBQWMsQ0FBQyxlQUFlLENBQ2pDO1lBQ0QseUJBQWMsQ0FBQyxLQUFLO1NBQ3ZCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNwQixDQUFDO0NBQ0o7QUE5REQsZ0NBOERDIn0=