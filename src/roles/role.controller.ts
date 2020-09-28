import { Role } from './../../db/src/entity/Role';
import { RoleService } from './role.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('roles')
export class RoleController {
  constructor(private roleService: RoleService) {}

  @Post()
  create(@Body() program: Role): Promise<Role> {
    return this.roleService.createRole(program);
  }
}
