import { User } from './../users/models/user.interface';
import { UserEntity } from './../users/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Response, Request } from 'express';
import { unhashed } from './unhashedPassword';
import { tokeSign } from './tokenSign';

Injectable();
export class LoginService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async loginUser(
    request: Request,
    response: Response,
    user: User,
  ): Promise<any> {
    const regUser = await this.userRepository.findOne({ email: user.email });

    if (!regUser) return response.status(400).send('Invalid email');

    const validPassword = await unhashed(user.password, regUser.password);

    if (!validPassword) response.status(400).send('Invalid password');

    const token = tokeSign(regUser);

    return response
      .header('x-tk-login-token', token)
      .header('access-control-expose-headers', 'x-tk-login-token')
      .status(200)
      .send('You logged in');
  }
}
