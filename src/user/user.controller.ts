import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import { UserService } from './user.service';

@injectable()
export class UserController {
  constructor(
    @inject(UserService) private userService: UserService
  ) {}

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userService.getUsers();
    return res.json(users);
  }

  async getUser(req: Request, res: Response) {
    const user = await this.userService.getUserById(+req.params.id);
    if (user) {
      return res.json(user);
    }
    return res.status(404).send('User not found');
  }

  async createUser(req: Request, res: Response) {
    const newUser = await this.userService.createUser(req.body);
    return res.status(201).json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const updatedUser = await this.userService.updateUser(+req.params.id, req.body);
    if (updatedUser) {
      return res.json(updatedUser);
    }
    return res.status(404).send('User not found');
  }

  async deleteUser(req: Request, res: Response) {
    await this.userService.deleteUser(+req.params.id);
    return res.status(204).send();
  }
}
