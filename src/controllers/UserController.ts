import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { BadRequest } from "../helpers/api-erros";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { PasswordsRepository } from "../repositories/PasswordsRepository";

type JWTPayloadUser = {
  id: number;
}

export class UserController{
  async create(req: Request, res: Response){
    const {name, email, password} = req.body;

    //check if the email already exist
    const userExist = await UserRepository.findOneBy({email})

    if(userExist){
       throw new BadRequest('Email do usuário já existe')
    }

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = UserRepository.create({
      name,
      email,
      password: hashPassword
    })

    await UserRepository.save(newUser)

    const {password: _, ...user} = newUser

    return res.status(201).json(user)
  }

  async delete(req: Request, res: Response){
 
    const deleteUserDetails = await PasswordsRepository.delete(req.params.id)

    return res.status(201).json(deleteUserDetails)
  }


  async login(req: Request, res: Response){
    const {email, password} = req.body;

    const user = await UserRepository.findOneBy({email})

    if(!user){
       throw new BadRequest('Email ou senha inválidos')
    }

    const verifyPass = bcrypt.compare(password, user.password)

    if(!verifyPass){
      throw new BadRequest('Email ou senha inválidos')
   }

   //if there isn't any data saved
   const token = jwt.sign({id: user.id}, process.env.JWT_PASS ?? '', {expiresIn: '1h'})

   const {password: _, ...userLogin} = user
   return res.json({
    user: userLogin,
    token: token
   })
  }

  async createPasswordsDetails(req: Request, res: Response){
    const {id,user, email, website, security_code, password} = req.body;

    const newDataPasswords = PasswordsRepository.create({
      user,
      id,
      email,
      password,
      website,
      security_code,
    })

    await PasswordsRepository.save(newDataPasswords)

    return res.status(201).json(newDataPasswords)


  }

  async getProfile(req: Request, res: Response){
    
    return res.json(req.user)
  }

  async userPassword(req: Request, res: Response){
    const { allDetails } = req.body;

    const {idUserPassword} = req.params;
 
    const details = await UserRepository.findOneBy({id: Number(idUserPassword)})

    if(!details){
      throw new BadRequest('Conteudo não existente')
    }

    const subject = await PasswordsRepository.findOneBy({id: Number(allDetails)}) 

    if(!subject){
      throw new BadRequest('Conteúdo não existente')
    }

    const subjectUpdate = {
      ...details,
      subjects: subject,
    }
    await PasswordsRepository.save(subjectUpdate)
    return res.status(204).json(subjectUpdate)


  }


  async listDetailsByUser(req: Request, res: Response){
  
    const passwordData = await PasswordsRepository.find({
      relations: {
        allDetails: true,
        registers: true,
        
      }
    })

    return res.json(passwordData)
  }
}