import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { ApiService } from './utils/api/api.service';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [PrismaService, ApiService],
})
export class AppModule {}
