import { v4 as uuidv4 } from "uuid";
import { IUser, IUserCreate } from "../../interfaces/users";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

const userCreateService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRopository = AppDataSource.getRepository(User);
  const users = await userRopository.find();
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }
  const user = new User();
  user.name = name;
  user.email = email;
  user.password = bcrypt.hashSync(password, 10);
  user.age = age;

  userRopository.create(user);
  await userRopository.save(user);

  return user;
};

export default userCreateService;
