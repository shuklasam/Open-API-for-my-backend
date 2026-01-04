export class TodoService {
    get(todoId) {
        return {
            id: todoId,
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
    create(TodosCreationParams) {
        console.log("mocked db call");
        return {
            id: "1",
            title: "mocked todo",
            description: "mocked todo",
            done: false
        };
    }
}
//# sourceMappingURL=todoService.js.map