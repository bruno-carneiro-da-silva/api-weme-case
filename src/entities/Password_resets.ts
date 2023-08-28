import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { userPassword } from "./SubjectUserPasswords";

@Entity('passwords_resets')
export class Password{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  email: string;

  @Column({type: 'text', unique: true})
  token: string;

  @CreateDateColumn({type: Date})
  created_at: {
    Date: "now()"
  };
  @UpdateDateColumn({type: Date})
  updated_at: {
    Date: "now()"
  };
}