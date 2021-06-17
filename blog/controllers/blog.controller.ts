// we import express to add types to the request/response objects from our controller functions
import express from 'express';

// we import our newly created blog services
import blogService from '../services/blog.service';

// we import the argon2 library for password hashing
import argon2 from 'argon2';

// we use debug with a custom context as described in Part 1
import debug from 'debug';
import { PatchBlogDto } from '../dto/patch.blog.dto';

const log: debug.IDebugger = debug('app:blog-controller');
class BlogController {
    async listBlog(req: express.Request, res: express.Response) {
        const blogs = await blogService.list(100, 0);
        res.status(200).send(blogs);
    }

    async getBlogById(req: express.Request, res: express.Response) {
        const blog = await blogService.readById(req.params.blogId);
        //why is req.body.id null??
        //debug(req.body); 
        res.status(200).send(blog);
    }

    async createBlog(req: express.Request, res: express.Response) {
        const blogId = await blogService.create(req.body);
        res.status(201).send({ id: blogId });
    }

    async patch(req: express.Request, res: express.Response) {
        log(await blogService.patchById(req.params.blogId, req.body));
        res.status(204).send();
    }

    async put(req: express.Request, res: express.Response) {
        req.body.password = await argon2.hash(req.body.password);
        //ANOTHER one of these issues
        log(await blogService.putById(req.params.blogId, req.body));
        res.status(204).send();
    }

    async removeBlog(req: express.Request, res: express.Response) {
        log(await blogService.deleteById(req.params.blogId));
        res.status(204).send();
    }
//     async updatePermissionFlags(req: express.Request, res: express.Response) {
//     const patchBlogDto: PatchBlogDto = {
//         permissionFlags: parseInt(req.params.permissionFlags),
//     };
//     // THIS was the issue for some reason req.body.id is not being set!!!
//     const response = await blogService.patchById(req.params.blogId, patchBlogDto);
//     log(response);
//     res.status(204).send();
// }
}

export default new BlogController();