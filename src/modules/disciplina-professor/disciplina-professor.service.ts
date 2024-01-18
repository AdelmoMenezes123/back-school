import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateDisciplinaProfessorDto } from './dto/create-disciplinaProfessor.dto';

@Injectable()
export class DisciplinaProfessorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateDisciplinaProfessorDto) {
    const disciplina = await this.prisma.disciplinaProfessor.create({ data });
    return disciplina;
  }

  async findAll() {
    return this.prisma.disciplinaProfessor.findMany();
  }
}
