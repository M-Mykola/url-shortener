import { Module } from '@nestjs/common';
import { LinkHandlerService } from './link-handler.service';
import { AppController } from './link-handler.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LinkSchema } from './link-handler.shcema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Link', schema: LinkSchema }])],
  controllers: [AppController],
  providers: [LinkHandlerService],
})
export class LinkHandlerModule {}
