import { UserAttributes, CreateUserDto, UpdateUserDto } from '../types/user.type';

export interface IUserRepository {
  findAll(): Promise<UserAttributes[]>;
  findById(id: number): Promise<UserAttributes | null>;
  create(userData: CreateUserDto): Promise<UserAttributes>;
  update(id: number, userData: UpdateUserDto): Promise<UserAttributes | null>;
  delete(id: number): Promise<void>;
}
