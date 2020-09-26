import { User } from './models/user.interface';
import { UserEntity } from './models/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  findOne(id: number): Promise<any> {
    return this.userRepository.findOne({ id });
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  deleteOne(id: number): Promise<any> {
    return this.userRepository.delete(id);
  }

  updateOne(id: number, user: User): Promise<any> {
    return this.userRepository.update(id, user);
  }
}
