import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  try {
    // check email
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    console.log(user);
    res.json({
      msg: "This is list ALl User",
      result: user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRoleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);
    res.json({ msg: "This is Update Role User" });
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    res.json({ msg: "This is Delete User" });
  } catch (error) {
    next(next);
  }
};

export const readUser = (req, res) => {
  res.json({ msg: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ msg: "This is Post User" });
};
