import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTurmaDto } from './dto/create-turma.dto';

@Injectable()
export class TurmaService {
  constructor(private prisma: PrismaService) {}
  async create(createTurmaDto: CreateTurmaDto) {
    await this.prisma.turma.create({ data: createTurmaDto });
  }

  async findAll() {
    return await this.prisma.turma.findMany();
  }
}
