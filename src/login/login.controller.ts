import { User } from './../users/models/user.interface';
import { LoginService } from './login.service';
import { Controller, Post, Body, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  create(
    @Req() request: Request,
    @Res() response: Response,
    @Body() user: User,
  ): Promise<any> {
    return this.loginService.loginUser(request, response, user);
  }
}
