import { createError } from "../utils/createError.js";

export const listUser = (req, res, next) => {
  try {
    // check email
    if (true) {
     createError(400, "Email already been use!!")
    } else {
      throw new Error("Password is Invalid!!");
    }
    res.json({ msg: "This is list ALl User" });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export const readUser = (req, res) => {
  res.json({ msg: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ msg: "This is Post User" });
};

export const updateRoleUser = (req, res) => {
  res.json({ msg: "This is Update Role User" });
};
export const deleteUser = (req, res) => {
  res.json({ msg: "This is Delete User" });
};
