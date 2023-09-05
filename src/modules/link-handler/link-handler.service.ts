import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from '../link-handler/link-handler.interface';

@Injectable()
export class LinkHandlerService {
  constructor(@InjectModel('Link') private userLink: Model<Link>) {}
  async generateAndSaveUrl(createLinkHandlerDto) {
    const newUserLink = await this.userLink.create(createLinkHandlerDto);
    return newUserLink.save();
  }

  findByRandomUrlKey(randomUrlKey: string) {
    return this.userLink.findOne({ randomUrlKey });
  }
}
