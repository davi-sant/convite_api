import dotenv from 'dotenv'
import { Pool } from 'pg'

dotenv.config()

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL
})

// Cria a tabela automaticamente se não existir
export async function createTableIfNotExists() {
    const query = `
        CREATE TABLE IF NOT EXISTS confirmacoes (
            id SERIAL PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            numero_convidado INTEGER NOT NULL,
            confirmado BOOLEAN DEFAULT FALSE,
            data_confirmacao TIMESTAMP DEFAULT NOW()
        );
    `

    try {
        await pool.query(query)
        console.log('✅ Tabela "confirmacoes" verificada/criada com sucesso.')
    } catch (err) {
        console.error('❌ Erro ao criar tabela:', err)
    }
}
