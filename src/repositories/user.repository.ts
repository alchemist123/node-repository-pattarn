import { injectable } from 'tsyringe';
import { User } from '../models/User';
import { IUserRepository } from '../user/interface/user.repository.interface';
import { CreateUserDto, UpdateUserDto } from '../user/types/user.type';

@injectable()
export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);  
  }

  async create(userData: CreateUserDto): Promise<User> {
    return User.create(userData);  
  }

  async update(id: number, userData: UpdateUserDto): Promise<User | null> {
    const user = await User.findByPk(id);
    if (user) {
      return user.update(userData);  
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
    }
  }
}
