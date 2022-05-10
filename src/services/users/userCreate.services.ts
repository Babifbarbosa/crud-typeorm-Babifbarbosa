import { v4 as uuidv4 } from "uuid";
import { IUser, IUserCreate } from "../../interfaces/users";
import { users } from "../../database";
const userCreateService = ({ name, email }: IUserCreate) => {
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  const newUser: IUser = {
    id: uuidv4(),
    name,
    email,
  };

  users.push(newUser);

  return newUser;
};

export default userCreateService;
