import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateNotaDto } from './dto/create-nota.dto';

@Injectable()
export class NotaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateNotaDto) {
    const nota = await this.prisma.nota.create({ data });
    return nota;
  }

  async findAll() {
    return this.prisma.nota.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} nota`;
  }
}
