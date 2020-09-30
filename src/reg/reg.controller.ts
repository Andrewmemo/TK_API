import { Reg } from './model/reg.interface';
import { User } from './../users/models/user.interface';
import { RegService } from './reg.service';
import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('reg')
export class RegController {
  constructor(private regService: RegService) {}

  @Post()
  create(
    @Req() request: Request,
    @Res() response: Response,
    @Body() user: User,
  ): Promise<any> {
    return this.regService.createUser(request, response, user);
  }
}
