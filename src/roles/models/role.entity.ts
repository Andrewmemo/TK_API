import { InterweavingEntity } from 'src/interweavings/models/interweaving.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class RoleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    () => InterweavingEntity,
    urp => urp.role,
  )
  connection: InterweavingEntity[];
}
