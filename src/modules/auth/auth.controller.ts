// auth.controller.ts
import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '../auth-guard/auth.guard';
import { UsuarioService } from '../usuario/usuario.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
  ) {}

  @Post('login')
  async login(@Body() credentials: { username: string; senha: string }) {
    try {
      // Adicione lógica para verificar credenciais e obter o usuário
      const user = await this.usuarioService.verifyUser(credentials);
      // Crie um token JWT
      const token = await this.authService.createToken(user.id);
      return { auth: true, token: token };
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }

  @Get('protected')
  @UseGuards(AuthGuard)
  async getProtectedData() {
    return await this.usuarioService.findAll();
  }
}
