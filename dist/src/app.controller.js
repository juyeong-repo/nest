"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
let posts = [
    {
        id: 1,
        author: '박주일',
        title: '저녁은 가볍게',
        content: '저녁을 배부르게 먹으면 다음날까지 더부룩하다.',
        likecount: 0,
        commentCount: 0
    },
    {
        id: 2,
        author: '박주이',
        title: '강의를 듣는 것이 중요한게 아니다',
        content: '직접 프로젝트를 만들어야 실력이 는다. 직접 고민해야 한다.',
        likecount: 0,
        commentCount: 0
    },
    {
        id: 3,
        author: '박주삼',
        title: '강의를 듣는 것이 중요한게 아니다',
        content: '직접 프로젝트를 만들어야 실력이 는다. 직접 고민해야 한다.',
        likecount: 0,
        commentCount: 0
    }
];
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getPost() {
        return {
            author: '작가',
            title: '제목',
            content: '내용',
            likecount: 1,
            commentCount: 9999,
            id: 2
        };
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], AppController.prototype, "getPost", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map