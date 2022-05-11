import { Request, Response } from "express";
import userListOneService from "../../services/users/userListOne.services";

const userListOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const users = await userListOneService(id);
    return res.send(users);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userListOneController;
