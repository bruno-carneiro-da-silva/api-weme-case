import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '../helpers/api-erros';
import { UserRepository } from '../repositories/UserRepository';
import jwt from 'jsonwebtoken'

type JWTPayloadUser = {
  id: number;
}
export const authMiddleware = async (req: Request, res:Response, next:NextFunction) =>{

  const {authorization} = req.headers

    if(!authorization){
      throw new UnauthorizedError('Não autorizado')
    }

    const token = authorization.split(' ')[1]

    //Validating the token
    const {id} = jwt.verify(token, process.env.JWT_PASS ?? '') as JWTPayloadUser

    const user = await UserRepository.findOneBy({id})

    if(!user){
      throw new UnauthorizedError('Não autorizado')
    }

    const {password: _, ...isLogged} = user

    req.user = isLogged
    next()
}