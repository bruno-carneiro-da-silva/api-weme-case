import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";

@Entity('videos')
export class Videos{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  title: string;

  @Column()
  url: string;

  @ManyToOne(() => Room, room => room.videos)
  @JoinColumn({name: 'room_id'})
  room: Room


}