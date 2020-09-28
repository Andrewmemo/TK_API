import { Interweaving } from './../interweavings/models/interweaving.interface';
import { InterweavingService } from './interweaving.service';

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('interweavings')
export class InterweavingController {
  constructor(private interweavingService: InterweavingService) {}

  @Post()
  create(@Body() interweaving: Interweaving): Promise<Interweaving> {
    return this.interweavingService.createInterweaving(interweaving);
  }

  @Get(':id')
  findOne(@Param() params): Promise<Interweaving> {
    return this.interweavingService.findOne(params.id);
  }

  @Get()
  findAll(): Promise<Interweaving[]> {
    return this.interweavingService.findAll();
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string): Promise<any> {
    return this.interweavingService.deleteOne(Number(id));
  }

  @Put(':id')
  updateOne(
    @Param('id') id: string,
    @Body() interweaving: Interweaving,
  ): Promise<any> {
    return this.interweavingService.updateOne(Number(id), interweaving);
  }
}
