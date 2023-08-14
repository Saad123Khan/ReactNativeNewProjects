import exppress from 'express';
import { getUser,createUser } from '#controllers/UserController';

const userRoute = exppress.Router();


userRoute.get('/user',getUser)

userRoute.post('/user',createUser)


export default userRoute;