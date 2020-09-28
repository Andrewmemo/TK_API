import { Program } from './Program';
import { Role } from './Role';
import { User } from './User';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  ManyToMany,
  ManyToOne,
  JoinColumn,
  BaseEntity,
} from 'typeorm';

@Entity('users_entities')
export class UsersRolesPrograms extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  user_id: number;

  @PrimaryColumn()
  role_id: number;

  @PrimaryColumn()
  program_id: number;

  @ManyToOne(
    () => User,
    user => user.fullConnection,
  )
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(
    () => Role,
    role => role.fullConnection,
  )
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @ManyToOne(
    () => Program,
    program => program.fullConnection,
  )
  @JoinColumn({ name: 'program_id' })
  program: Program;
}
