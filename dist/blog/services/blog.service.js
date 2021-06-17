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
const blog_dao_1 = __importDefault(require("../dao/blog.dao"));
class BlogService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.addBlog(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.removeBlogById(id);
        });
    }
    list(limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.getBlogs(limit, page);
        });
    }
    getByAuthorID(authorID, limit, page) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.getBlogsByAuthorID(authorID, limit, page);
        });
    }
    patchById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.updateBlogById(id, resource);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.getBlogById(id);
        });
    }
    putById(id, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return blog_dao_1.default.updateBlogById(id, resource);
        });
    }
}
exports.default = new BlogService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vYmxvZy9zZXJ2aWNlcy9ibG9nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrREFBc0M7QUFNdEMsTUFBTSxXQUFXO0lBQ1AsTUFBTSxDQUFDLFFBQXVCOztZQUNoQyxPQUFPLGtCQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxFQUFVOztZQUN2QixPQUFPLGtCQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7S0FBQTtJQUVLLElBQUksQ0FBQyxLQUFhLEVBQUUsSUFBWTs7WUFDbEMsT0FBTyxrQkFBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQztLQUFBO0lBRUssYUFBYSxDQUFDLFFBQWdCLEVBQUUsS0FBYSxFQUFFLElBQVk7O1lBQzdELE9BQU8sa0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxFQUFVLEVBQUUsUUFBc0I7O1lBQzlDLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxFQUFVOztZQUNyQixPQUFPLGtCQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVLEVBQUUsUUFBb0I7O1lBQzFDLE9BQU8sa0JBQU8sQ0FBQyxjQUFjLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxXQUFXLEVBQUUsQ0FBQyJ9