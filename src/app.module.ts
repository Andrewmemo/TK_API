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
        'postgres://iidnvfrm:sxPpk05X9zRmMf4-mpsn4ue7_c-cV7gS@dumbo.db.elephantsql.com:5432/iidnvfrm',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ProgramModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
