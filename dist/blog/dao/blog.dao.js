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
const mongoose_service_1 = __importDefault(require("../../common/services/mongoose.service"));
const common_permissionflag_enum_1 = require("../../common/middleware/common.permissionflag.enum");
const shortid_1 = __importDefault(require("shortid"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:blog-dao');
class BlogDao {
    constructor() {
        this.Schema = mongoose_service_1.default.getMongoose().Schema;
        this.blogSchema = new this.Schema({
            _id: String,
            title: {
                type: String,
                require: [true, "Post must have title!"]
            },
            body: {
                type: String,
                require: [true, "Post must have body!"]
            },
            authorId: String
        });
        this.Blog = mongoose_service_1.default.getMongoose().model('Blog', this.blogSchema);
        log('Created new instance of blogDao');
    }
    addBlog(blogFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const blogId = shortid_1.default.generate();
            const blog = new this.Blog(Object.assign(Object.assign({ _id: blogId }, blogFields), { permissionFlags: common_permissionflag_enum_1.PermissionFlag.FREE_PERMISSION }));
            yield blog.save();
            return blogId;
        });
    }
    getBlogByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.findOne({ email: email }).exec();
        });
    }
    getBlogById(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.findOne({ _id: blogId }).populate('Blog').exec();
        });
    }
    getBlogs(limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.find()
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    getBlogsByAuthorID(authorID, limit = 25, page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.find()
                .where("authorId", authorID)
                //.select(*)
                .limit(limit)
                .skip(limit * page)
                .exec();
        });
    }
    updateBlogById(blogId, blogFields) {
        return __awaiter(this, void 0, void 0, function* () {
            const existingBlog = yield this.Blog.findOneAndUpdate({ _id: blogId }, { $set: blogFields }, { new: true }).exec();
            return existingBlog;
        });
    }
    removeBlogById(blogId) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.deleteOne({ _id: blogId }).exec();
        });
    }
    getBlogByEmailWithPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.Blog.findOne({ email: email })
                .select('_id email permissionFlags +password')
                .exec();
        });
    }
}
exports.default = new BlogDao();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy5kYW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9ibG9nL2Rhby9ibG9nLmRhby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUlBLDhGQUFxRTtBQUNyRSxtR0FBb0Y7QUFFcEYsc0RBQThCO0FBQzlCLGtEQUEwQjtBQUcxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRW5ELE1BQU0sT0FBTztJQWtCVDtRQWpCQSxXQUFNLEdBQUcsMEJBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFFOUMsZUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN6QixHQUFHLEVBQUUsTUFBTTtZQUNYLEtBQUssRUFBQztnQkFDRixJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCLENBQUM7YUFDM0M7WUFDRCxJQUFJLEVBQUU7Z0JBQ0YsSUFBSSxFQUFFLE1BQU07Z0JBQ1osT0FBTyxFQUFFLENBQUMsSUFBSSxFQUFFLHNCQUFzQixDQUFDO2FBQzFDO1lBQ0QsUUFBUSxFQUFFLE1BQU07U0FDbkIsQ0FBQyxDQUFDO1FBRUgsU0FBSSxHQUFHLDBCQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFHaEUsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVLLE9BQU8sQ0FBQyxVQUF5Qjs7WUFDbkMsTUFBTSxNQUFNLEdBQUcsaUJBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLCtCQUN0QixHQUFHLEVBQUUsTUFBTSxJQUNSLFVBQVUsS0FDYixlQUFlLEVBQUUsMkNBQWMsQ0FBQyxlQUFlLElBQ2pELENBQUM7WUFDSCxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFDSyxjQUFjLENBQUMsS0FBYTs7WUFDOUIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RELENBQUM7S0FBQTtJQUVLLFdBQVcsQ0FBQyxNQUFjOztZQUM1QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RFLENBQUM7S0FBQTtJQUVLLFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxDQUFDOztZQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO2lCQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDO2lCQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2lCQUNsQixJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7SUFDSyxrQkFBa0IsQ0FBQyxRQUFnQixFQUFFLEtBQUssR0FBRyxFQUFFLEVBQUUsSUFBSSxHQUFHLENBQUM7O1lBQzNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7aUJBQ2xCLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDO2dCQUM1QixZQUFZO2lCQUNYLEtBQUssQ0FBQyxLQUFLLENBQUM7aUJBQ1osSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ2xCLElBQUksRUFBRSxDQUFDO1FBQ2hCLENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FDaEIsTUFBYyxFQUNkLFVBQXFDOztZQUVyQyxNQUFNLFlBQVksR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQ2pELEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUNmLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUNwQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FDaEIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVULE9BQU8sWUFBWSxDQUFDO1FBQ3hCLENBQUM7S0FBQTtJQUNLLGNBQWMsQ0FBQyxNQUFjOztZQUMvQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBQ0ssMEJBQTBCLENBQUMsS0FBYTs7WUFDMUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQztpQkFDckMsTUFBTSxDQUFDLHFDQUFxQyxDQUFDO2lCQUM3QyxJQUFJLEVBQUUsQ0FBQztRQUNoQixDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFlLElBQUksT0FBTyxFQUFFLENBQUMifQ==