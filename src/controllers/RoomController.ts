import { SubjectRepository } from './../repositories/SubjectRepository';
import { Room } from './../entities/Room';
import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";
import { VideoRepository } from "../repositories/VideoRepository";
import { BadRequest, UnauthorizedError } from '../helpers/api-erros';


export class RoomController{
  async create(req: Request, res: Response){
    // creates a subject
    const { name, description } = req.body;
    const newRoom = RoomRepository.create({name, description})

    await RoomRepository.save(newRoom)

    return res.status(201).json(newRoom);
  }

  async createVideo(req: Request, res: Response){
    // creates a Video
    const { title, url } = req.body;
    const {idRoom} = req.params;

    const room = await RoomRepository.findOneBy({id: Number(idRoom)})

    if(!title){
      throw new UnauthorizedError('O titulo é obrigatório')
    }

      if(!room){
        throw new BadRequest('Aula não existente')
      }

      const newVideo = VideoRepository.create({
        title,
        url,
        room
      })

      await VideoRepository.save(newVideo)
      return res.status(201).json(newVideo)
  }

  async roomSubject(req: Request, res: Response){
    const { subject_id } = req.body;
    const {idRoom} = req.params;
 
    const room = await RoomRepository.findOneBy({id: Number(idRoom)})

    if(!room){
      throw new BadRequest('Aula não existente')
    }

    const subject = await SubjectRepository.findOneBy({id: Number(subject_id)}) 

    if(!subject){
      throw new BadRequest('Conteúdo não existente')
    }

    const roomUpdate = {
      ...room,
      subjects: [subject],
    }
    await RoomRepository.save(roomUpdate)
    return res.status(204).json(room)


  }

  async list(req: Request, res: Response){
  
    const rooms = await RoomRepository.find({
      relations: {
        subjects: true,
        videos: true
      }
    })

    return res.json(rooms)
  }
}