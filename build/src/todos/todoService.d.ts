import type { Todo } from "./todo.js";
export type TodosCreationParams = Pick<Todo, "title" | "description">;
export declare class TodoService {
    get(todoId: string): Todo;
    create(TodosCreationParams: TodosCreationParams): Todo;
}
//# sourceMappingURL=todoService.d.ts.map