import { InterweavingEntity } from 'src/interweavings/models/interweaving.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(
    () => InterweavingEntity,
    urp => urp.user,
  )
  connection: InterweavingEntity[];
}
