import { Router } from "express";
import * as controller from "../controller/transferencia.enviar"

const routerTransferencia = Router()

routerTransferencia.post("/enviar-transferencia" , controller.enviarTransferencia)

export default routerTransferencia;