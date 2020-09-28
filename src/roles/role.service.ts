import { Role } from './../../db/src/entity/Role';
import { RoleEntity } from './models/role.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

Injectable();
export class RoleService {
  constructor(
    @InjectRepository(RoleEntity)
    private readonly roleRepositiry: Repository<RoleEntity>,
  ) {}

  createRole(role: Role): Promise<Role> {
    return this.roleRepositiry.save(role);
  }
}
