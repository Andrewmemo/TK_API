import { InterweavingEntity } from 'src/interweavings/models/interweaving.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('programs')
export class ProgramEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  photo: string;

  @Column()
  date: string;

  @Column({ type: 'json' })
  content: object;

  @OneToMany(
    () => InterweavingEntity,
    urp => urp.program,
  )
  connection: InterweavingEntity[];
}
