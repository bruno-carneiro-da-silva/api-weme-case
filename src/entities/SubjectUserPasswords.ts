import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Password } from "./Passwords";

@Entity('subjects')
export class userPassword{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(()=> Password, password => password.allDetails)
  @JoinTable({
    name: 'userPassword',
    joinColumn: {
      name: 'user_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'allDetails',
      referencedColumnName: 'id'
    }

  })
  userPasswords: Password[]
}