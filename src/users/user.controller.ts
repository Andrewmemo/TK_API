import { User } from './models/user.interface';
import { UserService } from './users.service';
import { Response, Request } from 'express';

import {
  Controller,
  Body,
  Get,
  Param,
  Delete,
  Put,
  Req,
  Res,
} from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('me')
  findMe(@Req() request: Request, @Res() response: Response) {
    return this.userService.findMe(request, response);
  }

  @Get(':id')
  findOne(@Param() params): Promise<User> {
    return this.userService.findOne(params.id);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<any> {
    return this.userService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() user: User): Promise<any> {
    return this.userService.updateOne(Number(id), user);
  }
}
