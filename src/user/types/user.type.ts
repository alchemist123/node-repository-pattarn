export type UserAttributes = {
    id?: string;  // Change to 'string' if the model uses UUID or a string type
    username: string;
    email: string;
    password?: string;
  };
  
  export type CreateUserDto = {
    username: string;
    email: string;
    password?: string;
  };
  
  export type UpdateUserDto = Partial<CreateUserDto>;
  