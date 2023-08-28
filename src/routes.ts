import Router from 'express';
import { UserController } from './controllers/UserController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

// User
routes.post('/register', new UserController().create)
routes.post('/login', new UserController().login)



routes.use(authMiddleware)



routes.get('/profile', new UserController().getProfile)
routes.get('/profile/list', new UserController().listDetailsByUser)
routes.post('/profile/create', new UserController().createPasswordsDetails)
routes.delete('/profile/delete/:id', new UserController().delete)
routes.put('/profile/create', new UserController().listDetailsByUser)














export default routes
