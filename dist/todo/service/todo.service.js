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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma.service");
let TodoService = class TodoService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async fetchAllTodos() {
        const myOldCursor = 56;
        const results = await this.prismaService.todo.findMany({
            skip: 1,
            take: 2,
            cursor: {
                id: myOldCursor,
            },
            where: {
                title: {
                    contains: 'title',
                },
            },
            orderBy: {
                id: 'asc',
            },
        });
        const lastPostInResults = results[1];
        console.log(lastPostInResults);
        const myCursor = lastPostInResults.id;
        console.log(myCursor);
        return results;
    }
    async fetchTodoItem(id) {
        return this.prismaService
            .todo.findUnique({ where: { id: Number(id) } });
    }
    async deleteTodoItem(id) {
        return this.prismaService
            .todo.delete({ where: { id: Number(id) } });
    }
    async updateTodoItem(id, title, content, is_done) {
        return this.prismaService
            .todo.update({
            where: { id: Number(id) },
            data: {
                title: title,
                content: content,
                is_done: is_done
            }
        });
    }
    async addTodoItem(data) {
        return this.prismaService
            .todo.create({ data: data });
    }
};
exports.TodoService = TodoService;
exports.TodoService = TodoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TodoService);
//# sourceMappingURL=todo.service.js.map