import { AppService } from './app.service';
interface PostModel {
    author: string;
    title: string;
    content: string;
    likecount: number;
    commentCount: number;
    id: number;
}
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getPost(): PostModel;
}
export {};
