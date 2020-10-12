import { Interweaving } from './../interweavings/models/interweaving.interface';
import { InterweavingEntity } from './../interweavings/models/interweaving.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable();
export class InterweavingService {
  constructor(
    @InjectRepository(InterweavingEntity)
    private readonly interweavingRepository: Repository<InterweavingEntity>,
  ) {}

  createInterweaving(interweaving: Interweaving): Promise<Interweaving> {
    return this.interweavingRepository.save(interweaving);
  }

  findOne(id: number): Promise<any> {
    return this.interweavingRepository.findOne({
      where: { id },
      relations: ['user', 'role', 'program'],
    });
  }

  findAll(): Promise<Interweaving[]> {
    return this.interweavingRepository.find({
      relations: ['user', 'role', 'program'],
    });
  }

  deleteOne(id: number): Promise<any> {
    return this.interweavingRepository.delete({ program_id: id });
  }

  updateOne(id: number, interweaving: Interweaving): Promise<any> {
    return this.interweavingRepository.update(id, interweaving);
  }
}
