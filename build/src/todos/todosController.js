var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Body, Controller, Get, Path, Post, Query, Route, SuccessResponse, } from "tsoa";
import { TodoService } from "./todoService.js";
let TodoController = class TodoController extends Controller {
    async getTodo(todoId) {
        let todoservice = new TodoService();
        return todoservice.get(todoId);
    }
};
__decorate([
    Get("{todoId}"),
    __param(0, Path())
], TodoController.prototype, "getTodo", null);
TodoController = __decorate([
    Route("todo")
], TodoController);
export { TodoController };
//# sourceMappingURL=todosController.js.map