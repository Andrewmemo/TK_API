import { User } from './models/user.interface';
import { UserEntity } from './models/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';
import { tokeSign } from 'src/login/tokenSign';

Injectable();
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  findMe(request: Request, response: Response) {
    return 'This will be a page about current user';
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

  async updateOne(
    request: Request,
    response: Response,
    id: number,
    user: User,
  ): Promise<any> {
    this.userRepository.update(id, user);
    const regUser = await this.userRepository.findOne({ email: user.email });
    const token = tokeSign(regUser);
    return response
      .header('x-tk-login-token', token)
      .header('access-control-expose-headers', 'x-tk-login-token')
      .status(200)
      .send('Updated successfully');
  }
}
