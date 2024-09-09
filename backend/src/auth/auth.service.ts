import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { GoogleCredentialsDTO } from './dto/google-credentials.dto';
import { Token, UserInfo } from './auth.interface';
import { ApiService } from 'src/utils/api/api.service';
import { JwtService } from '@nestjs/jwt';
import { ValidateTokenDTO } from './dto/validate-token.dto';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private api: ApiService,
    private jwt: JwtService,
  ) {}

  async loginWithGoogle(credentials: GoogleCredentialsDTO) {
    const token = await this._getToken(credentials.code);
    const userInfo = await this._getUserInfo(token);
    const user = await this._createNonExistingUser(userInfo);

    return {
      token: await this.jwt.signAsync({ sub: userInfo.sub }),
      user: this.parseUserInfo(user),
    };
  }

  async validateToken(token: ValidateTokenDTO) {
    const { exception, dataToken } = await this._getDataToken(token.token);

    const existingUser = await this._getUserBySub(dataToken.sub);
    if (!existingUser) throw exception;

    return this.parseUserInfo(existingUser);
  }

  async _getToken(code: string) {
    try {
      return await this.api.fetchJSON<Token>(
        'https://oauth2.googleapis.com/token',
        {
          method: 'POST',
          body: {
            code: code,
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            redirect_uri: 'postmessage',
            grant_type: 'authorization_code',
          },
        },
      );
    } catch {
      throw new HttpException('Invalid Code', HttpStatus.BAD_REQUEST);
    }
  }

  async _getUserInfo(token: Token) {
    try {
      return await this.api.fetchJSON<UserInfo>(
        'https://www.googleapis.com/oauth2/v3/userinfo',
        {
          headers: { Authorization: `Bearer ${token.access_token}` },
        },
      );
    } catch {
      throw new HttpException('Invalid token', HttpStatus.BAD_REQUEST);
    }
  }

  parseUserInfo(info: User) {
    return {
      name: info.name,
      picture: info.picture,
    };
  }

  async _getUserBySub(sub: string): Promise<User> {
    return await this.prisma.user.findUnique({
      where: { sub: sub },
    });
  }

  async _createNonExistingUser(userInfo: UserInfo): Promise<User> {
    const existingUser = await this._getUserBySub(userInfo.sub);
    if (existingUser) return existingUser;

    await this.prisma.user.create({
      data: {
        sub: userInfo.sub,
        name: userInfo.name,
        given_name: userInfo.given_name,
        family_name: userInfo.family_name,
        picture: userInfo.picture,
        email: userInfo.email,
      },
    });

    return existingUser;
  }

  async _getDataToken(token: string) {
    const exception = new HttpException(
      'Invalid token',
      HttpStatus.UNAUTHORIZED,
    );

    let dataToken = null;

    try {
      dataToken = await this.jwt.verifyAsync(token);
    } catch {
      throw exception;
    }

    if (!dataToken.sub) throw exception;

    return { exception, dataToken };
  }
}
