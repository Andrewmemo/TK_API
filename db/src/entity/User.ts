import { UsersRolesPrograms } from "./UsersRolesPrograms";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => UsersRolesPrograms, (urp) => urp.user)
  fullConnection: UsersRolesPrograms[];
}
