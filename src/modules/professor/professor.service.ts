import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProfessorDto } from './dto/create-professor.dto';

@Injectable()
export class ProfessorService {
  constructor(private prisma: PrismaService) {}
  async create(createProfessorDto: CreateProfessorDto) {
    await this.prisma.professor.create({
      data: createProfessorDto,
    });
  }

  findAll() {
    return this.prisma.professor.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} professor`;
  }
}
