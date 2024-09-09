import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma.service';
import { ApiService } from 'src/utils/api/api.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET_KEY,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, ApiService],
})
export class AuthModule {}
