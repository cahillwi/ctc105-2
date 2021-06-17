// bring in the data transfer objects that describe what a blog looks like
import { CreateBlogDto } from '../dto/create.blog.dto';
import { PatchBlogDto } from '../dto/patch.blog.dto';
import { PutBlogDto } from '../dto/put.blog.dto';
import mongooseService from '../../common/services/mongoose.service';
import { PermissionFlag } from '../../common/middleware/common.permissionflag.enum';

import shortid from 'shortid';
import debug from 'debug';
import { request } from 'express';

const log: debug.IDebugger = debug('app:blog-dao');

class BlogDao {
    Schema = mongooseService.getMongoose().Schema;

    blogSchema = new this.Schema({
        _id: String,
        title:{
            type: String,
            require: [true, "Post must have title!"]
        },
        body: {
            type: String,
            require: [true, "Post must have body!"]
        },
        authorId: String
    });

    Blog = mongooseService.getMongoose().model('Blog', this.blogSchema);

    constructor() {
        log('Created new instance of blogDao');
    }

    async addBlog(blogFields: CreateBlogDto) {
        const blogId = shortid.generate();
        const blog = new this.Blog({
            _id: blogId,
            ...blogFields,
            permissionFlags: PermissionFlag.FREE_PERMISSION,
        });
        await blog.save();
        return blogId;
    }
    async getBlogByEmail(email: string) {
        return this.Blog.findOne({ email: email }).exec();
    }
    
    async getBlogById(blogId: string) {
        return this.Blog.findOne({ _id: blogId }).populate('Blog').exec();
    }
    
    async getBlogs(limit = 25, page = 0) {
        return this.Blog.find()
            .limit(limit)
            .skip(limit * page)
            .exec();
    }
    async getBlogsByAuthorID(authorID: string, limit = 25, page = 0) {
        return this.Blog.find()
            .where("authorId", authorID)
            //.select(*)
            .limit(limit)
            .skip(limit * page)
            .exec();
    }

    async updateBlogById(
        blogId: string,
        blogFields: PatchBlogDto | PutBlogDto
    ) {
        const existingBlog = await this.Blog.findOneAndUpdate(
            { _id: blogId },
            { $set: blogFields },
            { new: true }
        ).exec();
    
        return existingBlog;
    }
    async removeBlogById(blogId: string) {
        return this.Blog.deleteOne({ _id: blogId }).exec();
    }
    async getBlogByEmailWithPassword(email: string) {
        return this.Blog.findOne({ email: email })
            .select('_id email permissionFlags +password')
            .exec();
    }

}

export default new BlogDao();