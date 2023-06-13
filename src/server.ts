import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

// Routers
import userRoutes from './routers/userRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected routes(): void {
    this.app.route('/').get((req: Request, res: Response) => {
      res.send('Hello Typscript');
    });

    this.app.use('/api/v1/users', userRoutes);
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log('App running on port :' + port);

  console.log(process.env.DB_USER);
});
