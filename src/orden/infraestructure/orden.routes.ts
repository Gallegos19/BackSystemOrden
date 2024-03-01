import { Router } from "express";
import { createOrden } from "./dependencies";

const orderRouter = Router();

orderRouter.post("/", createOrden.run.bind(createOrden));

export default orderRouter;
