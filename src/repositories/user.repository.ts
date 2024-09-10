import { injectable } from 'tsyringe';
import { User } from '../models/User';
import { IUserRepository } from '../user/interface/user.repository.interface';
import { CreateUserDto, UpdateUserDto } from '../user/types/user.type';

@injectable()
export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return User.findAll();  // Returning Sequelize model instances
  }

  async findById(id: number): Promise<User | null> {
    return User.findByPk(id);  // Return the Sequelize model instance or null
  }

  async create(userData: CreateUserDto): Promise<User> {
    return User.create(userData);  // Return the created Sequelize model instance
  }

  async update(id: number, userData: UpdateUserDto): Promise<User | null> {
    const user = await User.findByPk(id);
    if (user) {
      return user.update(userData);  // Return the updated Sequelize model instance
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
