import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateDisciplinaDto } from './dto/create-disciplina.dto';

@Injectable()
export class DisciplinaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDisciplinaDto) {
    const disciplina = await this.prisma.disciplina.create({ data });
    return disciplina;
  }

  async findAll() {
    return this.prisma.disciplina.findMany();
  }
}
