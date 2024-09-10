import { injectable, inject } from 'tsyringe';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models/User';
import { CreateUserDto, UpdateUserDto } from './types/user.type';

@injectable()
export class UserService {
  constructor(
    @inject(UserRepository) private userRepository: UserRepository
  ) {}

  async getUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    return this.userRepository.create(userData);
  }

  async updateUser(id: number, userData: UpdateUserDto): Promise<User | null> {
    return this.userRepository.update(id, userData);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
