export const listUser = (req, res) => {
  // code body
  res.json({ msg: "This is list ALl User" });
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
