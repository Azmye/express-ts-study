import todoController from '../controllers/todoController';
import { auth } from '../middleware/authMiddleware';
import todoValidator from '../middleware/todoValidator';
import BaseRoutes from './baseRouter';

// Controllers

class todoRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, todoController.index);
    this.router.post('/', auth, todoValidator, todoController.create);
    this.router.get('/:id', auth, todoController.show);
    this.router.put('/:id', auth, todoValidator, todoController.update);
    this.router.delete('/:id', auth, todoController.delete);
  }
}

export default new todoRoutes().router;
