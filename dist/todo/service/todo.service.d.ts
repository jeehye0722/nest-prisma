import { Todo } from '@prisma/client';
import { PrismaService } from '../../prisma.service';
export declare class TodoService {
    private prismaService;
    constructor(prismaService: PrismaService);
    fetchAllTodos(): Promise<Todo[]>;
    fetchTodoItem(id: number): Promise<Todo | null>;
    deleteTodoItem(id: number): Promise<Todo | null>;
    updateTodoItem(id: number, title: string, content: string, is_done: boolean): Promise<Todo | null>;
    addTodoItem(data: Todo): Promise<Todo>;
}
