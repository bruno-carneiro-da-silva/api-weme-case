import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";
import { Password } from "./Passwords";

@Entity('subjects')
export class userPassword{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'text'})
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