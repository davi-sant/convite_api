import { Request, Response } from 'express'
import {
    criarConfirmacao,
    listarConfirmacoes
} from '../services/confirmacaoService'

export async function postConfirmacao(req: Request, res: Response) {
    try {
        const { nome, email, numero_convidado, confirmado } = req.body

        if (!nome || !email || numero_convidado === undefined) {
            return res
                .status(400)
                .json({
                    error: 'Campos obrigatórios: nome, email e numero_convidado.'
                })
        }

        const nova = await criarConfirmacao({
            nome,
            email,
            numero_convidado,
            confirmado
        })
        res.status(201).json(nova)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao criar confirmação.' })
    }
}

export async function getConfirmacoes(req: Request, res: Response) {
    try {
        const lista = await listarConfirmacoes()
        res.json(lista)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Erro ao listar confirmações.' })
    }
}
