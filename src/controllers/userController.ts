import { Request, Response } from 'express';
import IController from './controllerInterface';

// dummy data
let data: any[] = [
  { id: 1, name: 'mushroom' },
  { id: 2, name: 'brody' },
  { id: 3, name: 'jaky' },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.status(200).send(data);
  }

  create(req: Request, res: Response): Response {
    const { name } = req.body;
    const generatedId = new Date().getTime();

    data.push({ id: generatedId, name });

    return res.status(200).send('Data Successfully created!');
  }

  show(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id === Number(id));

    if (!person) {
      return res.status(404).send('user not found!');
    }

    return res.status(200).send(person);
  }

  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;

    let person = data.find((item) => item.id === Number(id));

    if (!person) {
      return res.status(404).send('user not found!');
    }

    person.name = name;

    return res.status(200).send('Data successfully updated!');
  }

  delete(req: Request, res: Response): Response {
    const { id } = req.params;

    let person = data.find((item) => item.id === Number(id));

    if (!person) {
      return res.status(404).send('user not found!');
    }

    data.splice(data.indexOf(person), 1);

    return res.status(200).send('User Deleted Successfully!');
  }
}

export default new UserController();
