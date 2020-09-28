import { Program } from './models/program.interface';
import { ProgramService } from './program.service';

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('programs')
export class ProgramController {
  constructor(private programService: ProgramService) {}

  @Post()
  create(@Body() program: Program): Promise<Program> {
    return this.programService.createProgram(program);
  }

  @Get(':id')
  findOne(@Param() params): Promise<Program> {
    return this.programService.findOne(params.id);
  }

  @Get()
  findAll(): Promise<Program[]> {
    return this.programService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<any> {
    return this.programService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id: string, @Body() program: Program): Promise<any> {
    return this.programService.updateOne(Number(id), program);
  }
}
