import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import confirmacaoRoutes from './routes/confirmacaoRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/confirmacoes', confirmacaoRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`))
