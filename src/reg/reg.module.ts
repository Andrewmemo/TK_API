import { RegController } from './reg.controller';
import { RegService } from './reg.service';
import { UserEntity } from './../users/models/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [RegController],
  providers: [RegService],
})
export class RegModule {}
