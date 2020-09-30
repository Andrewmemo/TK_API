import { Program } from './models/program.interface';
import { ProgramEntity } from './models/program.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable();
export class ProgramService {
  constructor(
    @InjectRepository(ProgramEntity)
    private readonly programRepositiry: Repository<ProgramEntity>,
  ) {}

  createProgram(program: Program): Promise<Program> {
    return this.programRepositiry.save(program);
  }

  findOne(id: number): Promise<any> {
    return this.programRepositiry.findOne({ id });
  }

  findAll(): Promise<Program[]> {
    return this.programRepositiry.find();
  }

  deleteOne(id: number): Promise<any> {
    return this.programRepositiry.delete(id);
  }

  updateOne(id: number, program: Program): Promise<any> {
    return this.programRepositiry.update(id, program);
  }
}
