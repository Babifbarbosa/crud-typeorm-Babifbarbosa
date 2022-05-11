import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { IUser } from "../../interfaces/users";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
};

export default userListService;
