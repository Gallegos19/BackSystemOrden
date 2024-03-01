import express from "express";
import cors from "cors";
import indexRouter from "./src/shared/infraestructure/index.route";
import dotenv from 'dotenv'

const app = express();
const PORT = process.env.PORT || "3004";

app.disable("x-powered-by");

app.use(
  cors({
    origin: "http://localhost:3002",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(express.json());

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
