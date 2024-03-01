import { Router, Request, Response } from "express";
import orderRouter from "../../orden/infraestructure/orden.routes";

const prefijo = "/Api";
const indexRouter = Router();

indexRouter.use(`${prefijo}/orden`, orderRouter)

indexRouter.get(prefijo, (req: Request, res: Response) => {
  res.status(200).send("Hola estoy ready!");
});

export default indexRouter;
