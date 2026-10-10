import * as repository from "../repository/transferencia.repository"

export interface transferencia {
    senderId : string;
    receiverId : string;
    amount : number
}

export async function enviarTransferencia(dados :transferencia ){
    try {
        const resposta = await repository.enviar_transferencia(dados)
        return resposta
    } catch (error) {
        throw new Error("erro ao enviar a transferencia")
    }
}