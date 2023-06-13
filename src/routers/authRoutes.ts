import authController from '../controllers/authController';
import BaseRoutes from './baseRouter';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', authController.register);
    this.router.post('/login', authController.login);
  }
}

export default new AuthRoutes().router;
