import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProgramEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'json' })
  content: object;
}
