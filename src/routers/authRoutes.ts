import authController from '../controllers/authController';
import BaseRoutes from './baseRouter';
import validate from '../middleware/authValidator';

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', validate, authController.register);
    this.router.post('/login', validate, authController.login);
    this.router.get('/profile', authController.profile);
  }
}

export default new AuthRoutes().router;
