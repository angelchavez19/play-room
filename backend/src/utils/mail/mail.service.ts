import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD,
    },
  });

  async sendMail(email: string, subject: string, html: string) {
    await this.transporter.sendMail({
      from: process.env.EMAIL_HOST_USER,
      to: email,
      subject,
      html,
    });
  }
}
