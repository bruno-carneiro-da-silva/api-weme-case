import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";
import { BadRequest } from "../helpers/api-erros";

export class CreateSubjectController{
  async create(req: Request, res: Response){
    // creates a subject
    const { name } = req.body;

    if(!name){
      throw new BadRequest('O nome é obrigatório')
    }

    const newSubject = SubjectRepository.create({name})

      await SubjectRepository.save(newSubject)

      return res.status(201).json(newSubject)

  }
}