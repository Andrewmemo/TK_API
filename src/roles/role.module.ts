import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { RoleEntity } from './models/role.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RoleEntity])],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
