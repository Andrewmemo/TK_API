import { Reg } from './model/reg.interface';
import { User } from './../users/models/user.interface';
import { UserEntity } from './../users/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { hashed } from './hashedPassword';
import { Response, Request } from 'express';

Injectable();
export class RegService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(
    request: Request,
    response: Response,
    user: User,
  ): Promise<any> {
    const regUser = await this.userRepository.findOne({ email: user.email });

    if (regUser) {
      return response.status(400).send('User with such email already exists');
    }

    user.password = await hashed(user.password);

    await this.userRepository.save(user);

    const userResult: Reg = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    };

    return response.send(userResult);
  }
}
