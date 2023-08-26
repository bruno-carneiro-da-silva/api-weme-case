import Router from 'express';
import { UserController } from './controllers/UserController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

// User
routes.post('/register', new UserController().create)
routes.post('/login', new UserController().login)



routes.use(authMiddleware)



routes.get('/profile', new UserController().getProfile)
routes.get('/profile/:id', new UserController().listDetailsByUser)
routes.post('/profile/create/:id', new UserController().createPasswordsDetails)
routes.delete('/profile/delete/:id', new UserController().delete)
routes.patch('/profile/create/:id', new UserController().listDetailsByUser)














export default routes
