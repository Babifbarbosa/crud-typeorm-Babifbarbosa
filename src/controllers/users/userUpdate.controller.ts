import { Request, Response } from "express";
import userUpdateService from "../../services/users/userUpdate.services";

const userUpdateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const { password } = req.body;

    if (!password) {
      throw new Error("No password informed");
    }

    const user = await userUpdateService(id, password);

    return res.status(201).json({ message: "Password updated!" });
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).send({
        error: err.name,
        message: err.message,
      });
    }
  }
};

export default userUpdateController;
