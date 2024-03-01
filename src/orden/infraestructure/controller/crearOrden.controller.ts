import { Request, Response } from "express";
import { CrearOrden } from "../../aplication/service/HacerOrden.service";

export class CrearOrdenController {
  constructor(private readonly createOrderService: CrearOrden) {}
  async run(req: Request, res: Response) {
    try {
      const orden = req.body;
      const result = await this.createOrderService.run(orden);
      console.log(`result ${result}`);
      res.status(201).send(result);
    } catch (err: any) {
      return res.status(500).send(err.message);
    }
  }
}
