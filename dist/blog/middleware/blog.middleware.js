"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const blog_service_1 = __importDefault(require("../services/blog.service"));
const users_service_1 = __importDefault(require("../../users/services/users.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:blog-Middleware');
class BlogMiddleware {
    validateBlogExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = yield blog_service_1.default.readById(req.params.blogId);
            if (blog) {
                res.locals.blog = blog;
                next();
            }
            else {
                res.status(404).send({
                    error: `Blog ${req.params.blogId} not found`,
                });
            }
        });
    }
    ;
    validateAuthorExists(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const author = yield users_service_1.default.readById(req.params.authorId);
            if (author) {
                res.locals.author = author;
                next();
            }
            else {
                res.status(404).send({
                    error: `Author ${req.params.authorID} not found`,
                });
            }
        });
    }
    ;
}
exports.default = new BlogMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5taWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmxvZy9taWRkbGV3YXJlL2Jsb2cubWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBLDRFQUFtRDtBQUNuRCx1RkFBOEQ7QUFDOUQsa0RBQTBCO0FBRTFCLE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQUUxRCxNQUFNLGNBQWM7SUFFVixrQkFBa0IsQ0FDcEIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sSUFBSSxHQUFHLE1BQU0sc0JBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMzRCxJQUFJLElBQUksRUFBRTtnQkFDTixHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxRQUFRLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxZQUFZO2lCQUMvQyxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUFBLENBQUM7SUFDSSxvQkFBb0IsQ0FDdEIsR0FBb0IsRUFDcEIsR0FBcUIsRUFDckIsSUFBMEI7O1lBRTFCLE1BQU0sTUFBTSxHQUFHLE1BQU0sdUJBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNoRSxJQUFJLE1BQU0sRUFBRTtnQkFDUixHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Z0JBQzNCLElBQUksRUFBRSxDQUFDO2FBQ1Y7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLEtBQUssRUFBRSxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxZQUFZO2lCQUNuRCxDQUFDLENBQUM7YUFDTjtRQUNMLENBQUM7S0FBQTtJQUFBLENBQUM7Q0FDTDtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==