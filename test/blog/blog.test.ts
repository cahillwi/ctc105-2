import app from "../../app";
import supertest from "supertest";
import { expect } from "chai";
import mongoose from 'mongoose';

const firstBlogBody = {
    title: `automation test title`,
    body: `automation test body`
};

let accessToken = '';
let refreshToken = '';

describe('blog endpoints', function () {
    let request: supertest.SuperAgentTest;
    before(function () {
        request = supertest.agent(app);
    });
    // after(function (done) {
    //     // shut down the Express.js server, close our MongoDB connection, then tell Mocha we're done:
    //     app.close(() => {
    //         mongoose.connection.close(done);
    //     });
    // });
    it('should allow GET to /blog', async function(){
        const res = await request.get(`/blog`).send();
        expect(res.status).to.equal(200);
    });
});