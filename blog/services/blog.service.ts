import BlogDao from '../dao/blog.dao';
import { CRUD } from '../../common/interfaces/crud.interface';
import { CreateBlogDto } from '../dto/create.blog.dto';
import { PutBlogDto } from '../dto/put.blog.dto';
import { PatchBlogDto } from '../dto/patch.blog.dto';

class BlogService implements CRUD {
    async create(resource: CreateBlogDto) {
        return BlogDao.addBlog(resource);
    }

    async deleteById(id: string) {
        return BlogDao.removeBlogById(id);
    }

    async list(limit: number, page: number) {
        return BlogDao.getBlogs(limit, page);
    }

    async getByAuthorID(authorID: string, limit: number, page: number) {
        return BlogDao.getBlogsByAuthorID(authorID, limit, page);
    }
    
    async patchById(id: string, resource: PatchBlogDto) {
        return BlogDao.updateBlogById(id, resource);
    }

    async readById(id: string) {
        return BlogDao.getBlogById(id);
    }

    async putById(id: string, resource: PutBlogDto) {
        return BlogDao.updateBlogById(id, resource);
    }
}

export default new BlogService();