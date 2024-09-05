import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/create')
  @HttpCode(200)
  async createUser(@Body() user: CreateUserDTO) {
    if (!(await this.authService.createUser(user)))
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
  }

  @Delete('/del')
  async deleteUser() {
    this.authService.deleteUser();
  }
}
