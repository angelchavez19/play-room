import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { v4 } from 'uuid';
import * as bcrypt from 'bcrypt';
import { MailService } from 'src/utils/mail/mail.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private email: MailService,
  ) {}

  async createUser(user: CreateUserDTO) {
    const existUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existUser !== null) return false;

    const token = v4();

    const href = `${process.env.SERVER_FRONTEND}/confirm/${token}`;
    await this.email.sendMail(
      user.email,
      'Email Confirmation',
      `<p>Confirm your <a href="${href}">email</a></p>`,
    );

    const password = await bcrypt.hash(user.password, 10);

    await this.prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password,
        token,
      },
    });

    return true;
  }

  async deleteUser() {
    console.log(await this.prisma.user.findMany());

    // await this.prisma.user.delete({
    //   where: { id: 3 },
    // });
  }
}
