import { Router } from 'express'
import {
    getConfirmacoes,
    postConfirmacao
} from '../controllers/confirmacaoController'

const router = Router()

router.post('/', postConfirmacao)
router.get('/', getConfirmacoes)

export default router
