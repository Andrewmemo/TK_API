import { UserController } from './users/user.controller';
import { ProtectedController } from './protected_test/protected.controller';
import { ProtectedModule } from './protected_test/protected.module';
import { LoginModule } from './login/login.module';
import { RegModule } from './reg/reg.module';
import { RoleModule } from './roles/role.module';
import { InterweavingModule } from './interweavings/interweaving.module';
import { ProgramModule } from './proprams/program.module';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from 'middleware/login';
const config = require('config');

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: config.get('db'),
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProgramModule,
    InterweavingModule,
    RoleModule,
    RegModule,
    LoginModule,
    ProtectedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(ProtectedController);
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: '/me', method: RequestMethod.GET })
      .forRoutes(UserController);
  }
}
