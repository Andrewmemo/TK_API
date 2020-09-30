import { ProtectedService } from './protected.service';
import { Controller, Get } from '@nestjs/common';

@Controller('protected')
export class ProtectedController {
  constructor(private protectedService: ProtectedService) {}

  @Get()
  sayHello() {
    return this.protectedService.sayHello();
  }
}
