import { container } from 'tsyringe';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';

container.register('UserRepository', { useClass: UserRepository });
container.register('UserService', { useClass: UserService });
container.register('UserController', { useClass: UserController });
