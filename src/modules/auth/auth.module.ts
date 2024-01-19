import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuardService } from '../auth-guard/auth-guard.service';
import { UsuarioService } from '../usuario/usuario.service';
import { PrismaService } from './../../database/prisma.service';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: {
        expiresIn: parseInt(process.env.EXPIRES),
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, UsuarioService, AuthGuardService],
})
export class AuthModule {}
