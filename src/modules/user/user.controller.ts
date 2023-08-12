import { Request, Response } from "express";
import { UserService } from "./user.service";

const insertIntoDB = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertIntoDB(req.body);
    res.send({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};
const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const result = await UserService.insertOrUpdateProfile(req.body);
    res.send({
      success: true,
      message: "Profile created successfully",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const UserController = {
  insertIntoDB,
  insertOrUpdateProfile,
};
