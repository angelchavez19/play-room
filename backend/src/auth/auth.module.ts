import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { MailService } from 'src/utils/mail/mail.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, MailService],
})
export class AuthModule {}
