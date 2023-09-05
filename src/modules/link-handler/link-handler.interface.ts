import { Document } from 'mongoose';

export interface Link extends Document {
  randomUrlKey: string;
  originalUrl: string;
}
