import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleCredentialsDTO } from './dto/google-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login/google')
  async loginWithGoogle(@Body() credentials: GoogleCredentialsDTO) {
    return this.authService.loginWithGoogle(credentials);
  }
}
