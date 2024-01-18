import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTurmaProfessorDto } from './dto/create-turma-professor.dto';

@Injectable()
export class TurmaProfessorService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createTurmaProfessorDto: CreateTurmaProfessorDto) {
    await this.prisma.turmaProfessor.create({
      data: createTurmaProfessorDto,
    });
  }

  async findAll() {
    return await this.prisma.turmaProfessor.findMany();
  }
}
