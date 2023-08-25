import Router from 'express';
import { CreateSubjectController } from './controllers/CreateSubjectController';
import { RoomController } from './controllers/RoomController';
import { UserController } from './controllers/UserController';
import { authMiddleware } from './middlewares/authMiddleware';

const routes = Router();

routes.post('/subject', new CreateSubjectController().create)
routes.post('/room', new RoomController().create)
routes.get('/room', new RoomController().list)
routes.post('/room/:idRoom/create', new RoomController().createVideo)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)


// User
routes.post('/user', new UserController().create)
routes.post('/login', new UserController().login)

routes.use(authMiddleware)



routes.get('/profile', new UserController().getProfile)
routes.get('/profile/:id', new UserController().listDetailsByUser)
routes.post('/profile/create/:id', new UserController().createPasswordsDetails)
routes.delete('/profile/delete/:id', new UserController().delete)
routes.patch('/profile/create/:id', new UserController().listDetailsByUser)














export default routes
