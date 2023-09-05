import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LinkHandlerModule } from './modules/link-handler/link-handler.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { createConnection } from './connections';

@Module({
  imports: [
    LinkHandlerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(createConnection),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
