import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Videos } from "./Videos";
import { Subject } from "./Subject";

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  name: string;

  @Column({type: 'text', nullable: true})
  description: string;

  @OneToMany(()=> Videos, video => video.room)
  videos: Videos[]

  @ManyToMany(() => Subject, subject => subject.rooms)
  subjects: Subject[]
}