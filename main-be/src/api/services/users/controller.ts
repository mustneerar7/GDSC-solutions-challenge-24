import { Request, Response } from "express";
import * as actions from "./actions";

export const createUser = async (req: Request, res: Response) => {
  try {
    const {uuid} = req.body;
    const user = await actions.createUser(uuid);
    res.send({ user });
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
