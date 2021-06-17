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
const app_1 = __importDefault(require("../../app"));
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const firstBlogBody = {
    title: `automation test title`,
    body: `automation test body`
};
let accessToken = '';
let refreshToken = '';
describe('blog endpoints', function () {
    let request;
    before(function () {
        request = supertest_1.default.agent(app_1.default);
    });
    // after(function (done) {
    //     // shut down the Express.js server, close our MongoDB connection, then tell Mocha we're done:
    //     app.close(() => {
    //         mongoose.connection.close(done);
    //     });
    // });
    it('should allow Post of new blog', function () {
        return __awaiter(this, void 0, void 0, function* () {
        });
    });
    it('should allow GET to /blog', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield request.get(`/blog`).send();
            chai_1.expect(res.status).to.equal(200);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvZy50ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdGVzdC9ibG9nL2Jsb2cudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE0QjtBQUM1QiwwREFBa0M7QUFDbEMsK0JBQThCO0FBRzlCLE1BQU0sYUFBYSxHQUFHO0lBQ2xCLEtBQUssRUFBRSx1QkFBdUI7SUFDOUIsSUFBSSxFQUFFLHNCQUFzQjtDQUMvQixDQUFDO0FBRUYsSUFBSSxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3JCLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztBQUV0QixRQUFRLENBQUMsZ0JBQWdCLEVBQUU7SUFDdkIsSUFBSSxPQUFpQyxDQUFDO0lBQ3RDLE1BQU0sQ0FBQztRQUNILE9BQU8sR0FBRyxtQkFBUyxDQUFDLEtBQUssQ0FBQyxhQUFHLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNILDBCQUEwQjtJQUMxQixvR0FBb0c7SUFDcEcsd0JBQXdCO0lBQ3hCLDJDQUEyQztJQUMzQyxVQUFVO0lBQ1YsTUFBTTtJQUNOLEVBQUUsQ0FBQywrQkFBK0IsRUFBRTs7UUFFcEMsQ0FBQztLQUFBLENBQUMsQ0FBQztJQUNILEVBQUUsQ0FBQywyQkFBMkIsRUFBRTs7WUFDNUIsTUFBTSxHQUFHLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlDLGFBQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==