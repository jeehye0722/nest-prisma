import { TodoService } from '../service/todo.service';
import { Todo } from '@prisma/client';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    fetchAllTodos(): Promise<Todo[]>;
    fetchTodoItem(id: number): Promise<Todo | null>;
    deleteTodoItem(id: number): Promise<Todo | null>;
    addTodoItem(data: Todo): Promise<Todo | null>;
    updateTodoItem(id: number, data: Todo): Promise<Todo | null>;
}
