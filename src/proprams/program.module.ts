import { ProgramEntity } from './models/program.entity';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProgramEntity])],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
