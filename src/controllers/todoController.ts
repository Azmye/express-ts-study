import { Request, Response } from 'express';
import IController from './controllerInterface';
import TodoService from '../services/todoServices';

class TodoController implements IController {
  async index(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todos = await service.getAll();

    return res.send({
      status: 200,
      data: todos,
    });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.store();

    return res.status(200).send({
      data: todo,
      message: 'Todo created successfully!',
    });
  }

  async show(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    const todo = await service.show();

    return res.send({
      status: 200,
      data: todo,
    });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    await service.update();

    return res.send({
      status: 200,
      message: 'Data updated successfully!',
    });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const service: TodoService = new TodoService(req);
    await service.delete();

    return res.send({
      status: 200,
      message: 'Todo deleted successfully',
    });
  }
}

export default new TodoController();
