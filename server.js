import express from "express";
import cors from "cors";
import morgan from "morgan";
// Routing
import router from "./routes/user.js";
import authRouter from "./routes/auth.js"

const app = express();
const PORT = 8000;

//Basic middlewares
app.use(cors()); // allow cross domains
app.use(morgan("dev")); // Show logs
app.use(express.json()); // for read body

// Routing GET, POST, PUT, PATCH, DELETE
// app.get("/", (req, res) => {
//   // code body
//   res.json({ msg: "HELLO CC20" });
// });

app.use("/api", router);
app.use("/auth", authRouter);

// start Server
app.listen(8000, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
