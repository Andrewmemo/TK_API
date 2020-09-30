import { ProtectedService } from './protected.service';
import { ProtectedController } from './protected.controller';
import { UserEntity } from './../users/models/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ProtectedController],
  providers: [ProtectedService],
})
export class ProtectedModule {}
