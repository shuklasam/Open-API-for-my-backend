import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  SuccessResponse,
} from "tsoa";

import type { Todo } from "./todo.js";
import { TodoService, type TodosCreationParams } from "./todoService.js";

@Route("todo")
export class TodoController extends Controller {
  @Get("{todoId}")
  public async getTodo(
    @Path() todoId: string,
  ) : Promise<Todo>{
        let todoservice = new TodoService();
        return todoservice.get(todoId);
    }
  }