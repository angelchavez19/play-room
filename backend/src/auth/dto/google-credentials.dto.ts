import { IsString } from 'class-validator';

export class GoogleCredentialsDTO {
  @IsString()
  code: string;
}
