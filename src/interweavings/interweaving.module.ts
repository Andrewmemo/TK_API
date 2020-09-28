import { InterweavingService } from './interweaving.service';
import { InterweavingController } from './interweaving.controller';
import { InterweavingEntity } from './../interweavings/models/interweaving.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([InterweavingEntity])],
  controllers: [InterweavingController],
  providers: [InterweavingService],
})
export class InterweavingModule {}
