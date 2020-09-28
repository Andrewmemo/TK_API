import { ProgramEntity } from './../../proprams/models/program.entity';
import { RoleEntity } from './../../roles/models/role.entity';
import { UserEntity } from './../../users/models/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('interweavings')
export class InterweavingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  role_id: number;

  @Column()
  program_id: number;

  @ManyToOne(
    () => UserEntity,
    user => user.connection,
  )
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;

  @ManyToOne(
    () => RoleEntity,
    role => role.connection,
  )
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @ManyToOne(
    () => ProgramEntity,
    program => program.connection,
  )
  @JoinColumn({ name: 'program_id' })
  program: ProgramEntity;
}
