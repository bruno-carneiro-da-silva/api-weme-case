// import { userPassword } from './SubjectUserPasswords';
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Password } from "./Passwords";

@Entity('users')
export class User{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  name: string;

  @Column({type: 'text', unique: true})
  email: string;

  @OneToMany(() => Password, password_id => password_id.registers)
  password_user: Password[]

  @ManyToMany(() => Password, allPasswords => allPasswords.allDetails)
  userPassword: Password[]

  @Column({type: 'text'})
  password: string;

  @CreateDateColumn({type: Date})
  created_at: {
    Date: "now()"
  };
  @UpdateDateColumn({type: Date})
  updated_at: {
    Date: "now()"
  };
}