import { RoleModule } from './roles/role.module';
import { InterweavingModule } from './interweavings/interweaving.module';
import { ProgramModule } from './proprams/program.module';
import { UserModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        'postgres://olmaudto:9MUCFrS5MYOBEIQSF6zYnZVF-7d7j-aZ@dumbo.db.elephantsql.com:5432/olmaudto',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProgramModule,
    InterweavingModule,
    RoleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
