import { Router } from "express";
import userCreateController from "../controllers/users/userCreate.controller";
import userDeleteController from "../controllers/users/userDelete.controller";
import userListController from "../controllers/users/userList.controller";
import userListOneController from "../controllers/users/userListOne.controllers";
import userUpdateController from "../controllers/users/userUpdate.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userListOneController);
routes.delete("/users/:id", userDeleteController);
routes.patch("/users/:id", userUpdateController);
export default routes;
