import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { UsersRolesPrograms } from "./UsersRolesPrograms";

@Entity("programs")
export class Program extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: "json" })
  content: object;

  @OneToMany(() => UsersRolesPrograms, (urp) => urp.program)
  fullConnection: UsersRolesPrograms[];
}
