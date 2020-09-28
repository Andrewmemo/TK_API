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
    return this.interweavingRepository.findOne({ id });
  }

  findAll(): Promise<Interweaving[]> {
    return this.interweavingRepository.find();
  }

  deleteOne(id: number): Promise<any> {
    return this.interweavingRepository.delete(id);
  }

  updateOne(id: number, interweaving: Interweaving): Promise<any> {
    return this.interweavingRepository.update(id, interweaving);
  }
}
