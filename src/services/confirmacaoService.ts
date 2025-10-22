import { pool } from '../config/database'
import { Confirmacao } from '../models/confirmacaoModel'

export async function criarConfirmacao(dados: Confirmacao) {
    const query = `
    INSERT INTO confirmacoes (nome, email, numero_convidado, confirmado)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `
    const values = [
        dados.nome,
        dados.email,
        dados.numero_convidado,
        dados.confirmado
    ]
    const result = await pool.query(query, values)
    return result.rows[0]
}

export async function listarConfirmacoes() {
    const result = await pool.query('SELECT * FROM confirmacoes')
    return result.rows
}
