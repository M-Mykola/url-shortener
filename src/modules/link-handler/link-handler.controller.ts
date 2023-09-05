import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { LinkHandlerService } from './link-handler.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly linkHandlerService: LinkHandlerService) {}
  @Post('shorten')
  async shortenUrl(@Body('originalUrl') originalUrl: string) {
    const randomUrlKey = Math.random().toString(36).substring(2, 8);
    const shortenUrl = { randomUrlKey: randomUrlKey, originalUrl: originalUrl };
    return this.linkHandlerService.generateAndSaveUrl(shortenUrl);
  }

  @Get(':randomUrlKey')
  async redirectToOriginalUrl(
    @Param('randomUrlKey') randomUrlKey: string,
    @Res() res: Response,
  ) {
    const result =
      await this.linkHandlerService.findByRandomUrlKey(randomUrlKey);
    if (result.originalUrl) {
      res.redirect(result.originalUrl);
    } else {
      res.status(404).send('URL not found');
    }
    return result;
  }
}
