import * as z from "zod"
import type { Request , Response , NextFunction } from "express";
import * as service from "../service/transferencia.service"

const esquemaValidacaoTransferencia = z.object({
    senderId : z.uuid({error : "id do envio nao chegou ao backend"}).min(1).max(100),
    receiverId : z.uuid({error : "id do envio nao chegou ao backend"}).min(1).max(100),
    amount : z.number({error : "valor nao foi enviado para a transferencia"})
})




export async function enviarTransferencia(req: Request , res: Response , next: NextFunction)
:Promise <void>
{
    try {
        const  dados = esquemaValidacaoTransferencia.parse(req.body)
        const resposta = await service.enviarTransferencia(dados)
        res.status(200).json(resposta)
    } catch (error) {
        next(error)
    }
}