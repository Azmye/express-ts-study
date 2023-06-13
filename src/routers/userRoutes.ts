import BaseRoutes from './baseRouter';

// Controllers
import userController from '../controllers/userController';
import { auth } from '../middleware/authMiddleware';

class UserRoutes extends BaseRoutes {
  public routes(): void {
    this.router.get('/', auth, userController.index);
    this.router.post('/', userController.create);
    this.router.get('/:id', userController.show);
    this.router.put('/:id', userController.update);
    this.router.delete('/:id', userController.delete);
  }
}

export default new UserRoutes().router;
