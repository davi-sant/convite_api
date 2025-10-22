export interface Confirmacao {
    id?: number
    nome: string
    email: string
    numero_convidado: number
    confirmado: boolean
    criado_em?: Date
}
