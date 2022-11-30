import { Router } from 'express'
import authHandlers from '../controllers/auth.controller'

const authRouter = Router()

authRouter.post('/login', ...authHandlers.login)

authRouter.post('/signUp', ...authHandlers.signUp)

authRouter.post('/refresh', ...authHandlers.refresh)

authRouter.delete('/logout/:userId', ...authHandlers.delete)

export { authRouter }
