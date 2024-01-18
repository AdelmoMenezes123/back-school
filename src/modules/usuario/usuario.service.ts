import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    await this.prisma.usuario.create({ data: createUsuarioDto });
  }

  async findAll() {
    return await this.prisma.usuario.findMany();
  }
}
