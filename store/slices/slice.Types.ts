type CreateUserResponse = {
  addUser: {
    id: string;
    name: string;
    avatr: string;
  };
};
type CreateUserRequest = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};
