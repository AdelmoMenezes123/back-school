import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    if (!createUsuarioDto.senha) {
      throw new BadRequestException(
        'Por favor, insira uma senha para prosseguir!',
      );
    }

    // Hash da senha usando bcrypt
    const hashedPassword = await hash(createUsuarioDto.senha, 10);

    // Crie o usuário no banco de dados com a senha criptografada
    await this.prisma.usuario.create({
      data: { ...createUsuarioDto, senha: hashedPassword },
    });
  }

  async verifyUser(credentials: { username: string; senha: string }) {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        username: credentials.username,
      },
    });

    if (!usuario) {
      throw new HttpException(
        'Usuario não encontrado!',
        HttpStatus.UNAUTHORIZED,
      );
    }

    const match = await compare(credentials.senha, usuario.senha);
    if (!match) {
      throw new HttpException('Senha inválida', HttpStatus.UNAUTHORIZED);
    }

    return usuario;
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }
}
