import { UserAttributes, CreateUserDto, UpdateUserDto } from '../types/user.type';

export interface IUserService {
  getUsers(): Promise<UserAttributes[]>;
  getUserById(id: number): Promise<UserAttributes | null>;
  createUser(userData: CreateUserDto): Promise<UserAttributes>;
  updateUser(id: number, userData: UpdateUserDto): Promise<UserAttributes | null>;
  deleteUser(id: number): Promise<void>;
}
