import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { CreateAlunoDto } from './dto/create-aluno.dto';

@Injectable()
export class AlunosService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAlunoDto) {
    const existsAluno = await this.prisma.aluno.findFirst({
      where: {
        matricula: data.matricula,
      },
    });

    if (existsAluno) {
      throw new Error(`Aluno com a matricula: ${data.matricula} ja existe!`);
    }

    const disciplina = await this.prisma.disciplina.create({ data });
    return disciplina;
  }

  async findAll() {
    return this.prisma.disciplina.findMany();
  }
}
