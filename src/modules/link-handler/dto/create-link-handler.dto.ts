import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLinkHandlerDto {
  @IsString()
  @IsNotEmpty()
  randomUrlKey: string;
  originalUrl: string;
}
