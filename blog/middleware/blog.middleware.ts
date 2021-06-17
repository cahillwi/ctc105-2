import express from "express";
import blogService from "../services/blog.service";
import debug from "debug";

const log: debug.IDebugger = debug('app:blog-Middleware');

class BlogMiddleware {

    async validateBlogExists(
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
    ) {
        const blog = await blogService.readById(req.params.blogId);
        if (blog) {
            res.locals.blog = blog;
            next();
        } else {
            res.status(404).send({
                error: `Blog ${req.params.blogId} not found`,
            });
        }
    }
}

export default new BlogMiddleware();