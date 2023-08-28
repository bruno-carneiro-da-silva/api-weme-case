import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";
import { userPassword } from "./SubjectUserPasswords";

@Entity('passwords')
export class Password{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
  name: string;

  @Column({type: 'text'})
  user?: string;

  @Column({type: 'text', unique: true})
  email: string;

  @Column()
  password: string;

  @ManyToOne(()=> User, (register) => register.password_user)
  @JoinColumn({name: 'user_id'})
  registers: User

  @ManyToMany(()=> userPassword, (pass) => pass.userPasswords)
  allDetails: userPassword[]


  @Column()
  website: string;

  @Column({type: 'text', nullable: true})
  security_code: string;

  @CreateDateColumn({type: Date})
  created_at: {
    Date: "now()"
  };
  @UpdateDateColumn({type: Date})
  updated_at: {
    Date: "now()"
  };
}