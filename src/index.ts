import express from "express";
import CrudRoutes from "./routes/CrudRoutes.js";
import AuthRoutes from "./routes/AuthRoutes.js";
const app = express();
const port = process.env.port;

app.use("/", CrudRoutes);
app.use("/auth", AuthRoutes);
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});
