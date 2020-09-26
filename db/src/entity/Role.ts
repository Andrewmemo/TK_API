import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { UsersRolesPrograms } from "./UsersRolesPrograms";

@Entity("roles")
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => UsersRolesPrograms, (urp) => urp.role)
  fullConnection: UsersRolesPrograms[];
}
